# MR Residencies - Spring Boot Backend Specification

## Complete API Specification for External Backend Development

This document provides everything needed to build a Spring Boot backend
that integrates perfectly with the MR Residencies React frontend.

---

## 1. PROJECT SETUP

### pom.xml Dependencies
```xml
<parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.2.0</version>
</parent>

<dependencies>
    <dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-web</artifactId></dependency>
    <dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-data-jpa</artifactId></dependency>
    <dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-security</artifactId></dependency>
    <dependency><groupId>org.springframework.boot</groupId><artifactId>spring-boot-starter-validation</artifactId></dependency>
    <dependency><groupId>com.mysql</groupId><artifactId>mysql-connector-j</artifactId></dependency>
    <dependency><groupId>io.jsonwebtoken</groupId><artifactId>jjwt-api</artifactId><version>0.12.3</version></dependency>
    <dependency><groupId>io.jsonwebtoken</groupId><artifactId>jjwt-impl</artifactId><version>0.12.3</version></dependency>
    <dependency><groupId>io.jsonwebtoken</groupId><artifactId>jjwt-jackson</artifactId><version>0.12.3</version></dependency>
    <dependency><groupId>org.springdoc</groupId><artifactId>springdoc-openapi-starter-webmvc-ui</artifactId><version>2.3.0</version></dependency>
    <dependency><groupId>org.projectlombok</groupId><artifactId>lombok</artifactId><scope>provided</scope></dependency>
</dependencies>
```

### application.properties
```properties
spring.datasource.url=jdbc:mysql://localhost:3306/mr_residencies
spring.datasource.username=root
spring.datasource.password=your_password
spring.jpa.hibernate.ddl-auto=update
spring.jpa.show-sql=true
spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.MySQLDialect
spring.servlet.multipart.max-file-size=10MB
spring.servlet.multipart.max-request-size=50MB

# JWT
app.jwt.secret=your_256_bit_secret_key_here_at_least_32_chars
app.jwt.expiration=86400000

# CORS
app.cors.allowed-origins=http://localhost:5173,http://localhost:8080

# Swagger
springdoc.api-docs.path=/api-docs
springdoc.swagger-ui.path=/swagger-ui.html
```

---

## 2. FOLDER STRUCTURE

```
src/main/java/com/mrresidencies/
├── MrResidenciesApplication.java
├── config/
│   ├── CorsConfig.java
│   ├── SecurityConfig.java
│   └── SwaggerConfig.java
├── security/
│   ├── JwtAuthenticationFilter.java
│   ├── JwtTokenProvider.java
│   └── CustomUserDetailsService.java
├── entity/
│   ├── User.java
│   ├── Role.java (enum: USER, ADMIN)
│   ├── Apartment.java
│   ├── ApartmentImage.java
│   ├── Booking.java
│   └── Review.java
├── repository/
│   ├── UserRepository.java
│   ├── ApartmentRepository.java
│   ├── ApartmentImageRepository.java
│   ├── BookingRepository.java
│   └── ReviewRepository.java
├── dto/
│   ├── auth/
│   │   ├── LoginRequest.java
│   │   ├── SignupRequest.java
│   │   └── JwtResponse.java
│   ├── apartment/
│   │   ├── ApartmentDTO.java
│   │   ├── ApartmentCreateRequest.java
│   │   └── ApartmentFilterRequest.java
│   ├── booking/
│   │   ├── BookingDTO.java
│   │   ├── BookingCreateRequest.java
│   │   └── BookingStatusUpdate.java
│   ├── review/
│   │   ├── ReviewDTO.java
│   │   └── ReviewCreateRequest.java
│   └── user/
│       ├── UserProfileDTO.java
│       └── ProfileUpdateRequest.java
├── service/
│   ├── AuthService.java
│   ├── ApartmentService.java
│   ├── BookingService.java
│   ├── ReviewService.java
│   ├── ImageService.java
│   └── UserService.java
├── controller/
│   ├── AuthController.java
│   ├── ApartmentController.java
│   ├── BookingController.java
│   ├── ReviewController.java
│   ├── ImageController.java
│   └── UserController.java
├── exception/
│   ├── GlobalExceptionHandler.java
│   ├── ResourceNotFoundException.java
│   ├── BadRequestException.java
│   └── UnauthorizedException.java
└── mapper/
    ├── ApartmentMapper.java
    ├── BookingMapper.java
    └── ReviewMapper.java
```

---

## 3. MYSQL DATABASE SCHEMA

```sql
CREATE DATABASE mr_residencies;
USE mr_residencies;

CREATE TABLE users (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    full_name VARCHAR(100),
    phone VARCHAR(20),
    address TEXT,
    avatar_url VARCHAR(500),
    role ENUM('USER', 'ADMIN') DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE apartments (
    id VARCHAR(36) PRIMARY KEY,
    block VARCHAR(5) NOT NULL,
    number VARCHAR(10) NOT NULL,
    floor INT NOT NULL DEFAULT 1,
    type VARCHAR(20) NOT NULL DEFAULT 'Standard',
    bedrooms INT NOT NULL DEFAULT 1,
    bathrooms INT NOT NULL DEFAULT 1,
    balconies INT NOT NULL DEFAULT 0,
    sqft INT NOT NULL DEFAULT 500,
    rent DECIMAL(10,2) NOT NULL DEFAULT 0,
    yearly_rent DECIMAL(12,2) NOT NULL DEFAULT 0,
    furnishing VARCHAR(30) NOT NULL DEFAULT 'Unfurnished',
    available BOOLEAN NOT NULL DEFAULT TRUE,
    rating DECIMAL(2,1) NOT NULL DEFAULT 0,
    reviews_count INT NOT NULL DEFAULT 0,
    description TEXT,
    features JSON,
    unique_features JSON,
    accessibility JSON,
    amenities JSON,
    location VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE apartment_images (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    apartment_id VARCHAR(36) NOT NULL,
    image_url VARCHAR(500) NOT NULL,
    image_type VARCHAR(30) DEFAULT 'main',
    display_order INT DEFAULT 0,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (apartment_id) REFERENCES apartments(id) ON DELETE CASCADE
);

CREATE TABLE bookings (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    apartment_id VARCHAR(36) NOT NULL,
    booking_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    check_in_date DATE NOT NULL,
    check_out_date DATE NOT NULL,
    total_amount DECIMAL(12,2) NOT NULL DEFAULT 0,
    status ENUM('PENDING', 'APPROVED', 'REJECTED', 'CANCELLED') DEFAULT 'PENDING',
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (apartment_id) REFERENCES apartments(id) ON DELETE CASCADE
);

CREATE TABLE reviews (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id BIGINT NOT NULL,
    apartment_id VARCHAR(36) NOT NULL,
    rating INT NOT NULL CHECK (rating BETWEEN 1 AND 5),
    comment TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (apartment_id) REFERENCES apartments(id) ON DELETE CASCADE
);
```

---

## 4. REST API ENDPOINTS

### Authentication
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/auth/signup` | Public | Register new user |
| POST | `/api/auth/login` | Public | Login & get JWT |

### Apartments
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/apartments` | Public | List all (with filters, pagination) |
| GET | `/api/apartments/{id}` | Public | Get apartment details |
| POST | `/api/apartments` | ADMIN | Create apartment |
| PUT | `/api/apartments/{id}` | ADMIN | Update apartment |
| DELETE | `/api/apartments/{id}` | ADMIN | Delete apartment |

### Apartment Images
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| POST | `/api/apartments/{id}/images` | ADMIN | Upload images (multipart) |
| DELETE | `/api/images/{imageId}` | ADMIN | Delete image |

### Bookings
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/bookings` | USER | Get user's bookings |
| POST | `/api/bookings` | USER | Create booking |
| PUT | `/api/bookings/{id}/cancel` | USER | Cancel booking |
| GET | `/api/admin/bookings` | ADMIN | Get all bookings |
| PUT | `/api/admin/bookings/{id}/status` | ADMIN | Change booking status |

### Reviews
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/apartments/{id}/reviews` | Public | Get apartment reviews |
| POST | `/api/reviews` | USER | Create review |
| PUT | `/api/reviews/{id}` | USER | Update review |
| DELETE | `/api/reviews/{id}` | USER | Delete review |

### User Profile
| Method | Endpoint | Auth | Description |
|--------|----------|------|-------------|
| GET | `/api/profile` | USER | Get profile |
| PUT | `/api/profile` | USER | Update profile |

---

## 5. SAMPLE JSON REQUEST/RESPONSE

### POST `/api/auth/signup`
**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepass123",
  "fullName": "John Doe",
  "phone": "+91-9876543210"
}
```
**Response (201):**
```json
{
  "message": "Account created successfully",
  "userId": 1
}
```

### POST `/api/auth/login`
**Request:**
```json
{
  "email": "user@example.com",
  "password": "securepass123"
}
```
**Response (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiJ9...",
  "tokenType": "Bearer",
  "userId": 1,
  "email": "user@example.com",
  "role": "USER"
}
```

### GET `/api/apartments?block=A&minRent=20000&maxRent=35000&bedrooms=2&page=0&size=10&sort=rent,asc`
**Response (200):**
```json
{
  "content": [
    {
      "id": "A-101",
      "block": "A",
      "number": "101",
      "floor": 1,
      "type": "2BHK",
      "bedrooms": 2,
      "bathrooms": 2,
      "balconies": 1,
      "sqft": 1200,
      "rent": 25000,
      "yearlyRent": 300000,
      "furnishing": "Semi-Furnished",
      "available": true,
      "rating": 4.5,
      "reviewsCount": 12,
      "description": "Spacious 2BHK apartment...",
      "features": ["Air Conditioning", "Modular Kitchen"],
      "uniqueFeatures": ["Corner Unit", "Garden View"],
      "accessibility": ["Elevator Access"],
      "images": [
        {"id": 1, "imageUrl": "https://...", "imageType": "main", "displayOrder": 0}
      ]
    }
  ],
  "totalElements": 5,
  "totalPages": 1,
  "number": 0,
  "size": 10
}
```

### POST `/api/bookings`
**Headers:** `Authorization: Bearer <token>`
**Request:**
```json
{
  "apartmentId": "A-101",
  "checkInDate": "2026-03-01",
  "checkOutDate": "2026-03-31",
  "totalAmount": 25000,
  "notes": "Prefer early check-in"
}
```
**Response (201):**
```json
{
  "id": 1,
  "apartmentId": "A-101",
  "checkInDate": "2026-03-01",
  "checkOutDate": "2026-03-31",
  "totalAmount": 25000,
  "status": "PENDING",
  "createdAt": "2026-02-22T10:30:00"
}
```

---

## 6. CORS CONFIGURATION

```java
@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/api/**")
            .allowedOrigins("http://localhost:5173", "https://your-lovable-app.lovable.app")
            .allowedMethods("GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS")
            .allowedHeaders("*")
            .allowCredentials(true);
    }
}
```

---

## 7. FRONTEND CONNECTION GUIDE

To connect the React frontend to the Spring Boot backend:

1. Create an API client file (e.g., `src/lib/api.ts`):
```typescript
const API_BASE = 'http://localhost:8080/api';

const getToken = () => localStorage.getItem('jwt_token');

export const api = {
  get: async (path: string) => {
    const res = await fetch(`${API_BASE}${path}`, {
      headers: { Authorization: `Bearer ${getToken()}` }
    });
    return res.json();
  },
  post: async (path: string, body: any) => {
    const res = await fetch(`${API_BASE}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${getToken()}`
      },
      body: JSON.stringify(body)
    });
    return res.json();
  },
  // similar for put, delete
};
```

2. Replace Supabase calls with API calls:
   - `supabase.auth.signUp()` → `api.post('/auth/signup', data)`
   - `supabase.auth.signInWithPassword()` → `api.post('/auth/login', data)`
   - `supabase.from('apartments').select()` → `api.get('/apartments')`
   - `supabase.from('bookings').insert()` → `api.post('/bookings', data)`

3. Store JWT token from login response in localStorage
4. Include `Authorization: Bearer <token>` header in all authenticated requests

---

## 8. RUNNING INSTRUCTIONS

1. **Prerequisites:** JDK 17+, MySQL 8+, Maven 3.9+
2. Create MySQL database: `CREATE DATABASE mr_residencies;`
3. Update `application.properties` with your MySQL credentials
4. Run: `mvn spring-boot:run`
5. Swagger UI: `http://localhost:8080/swagger-ui.html`
6. API docs: `http://localhost:8080/api-docs`

---

## 9. MATCHING FRONTEND FIELDS TO BACKEND

| Frontend Field | Backend Entity Field | API Response Field |
|---------------|---------------------|-------------------|
| `apartment.id` | `Apartment.id` | `id` |
| `apartment.block` | `Apartment.block` | `block` |
| `apartment.number` | `Apartment.number` | `number` |
| `apartment.floor` | `Apartment.floor` | `floor` |
| `apartment.type` | `Apartment.type` | `type` |
| `apartment.bedrooms` | `Apartment.bedrooms` | `bedrooms` |
| `apartment.bathrooms` | `Apartment.bathrooms` | `bathrooms` |
| `apartment.balconies` | `Apartment.balconies` | `balconies` |
| `apartment.sqft` | `Apartment.sqft` | `sqft` |
| `apartment.rent` | `Apartment.rent` | `rent` |
| `apartment.yearlyRent` | `Apartment.yearlyRent` | `yearlyRent` |
| `apartment.furnishing` | `Apartment.furnishing` | `furnishing` |
| `apartment.available` | `Apartment.available` | `available` |
| `apartment.rating` | `Apartment.rating` | `rating` |
| `apartment.reviews` | `Apartment.reviewsCount` | `reviewsCount` |
| `apartment.description` | `Apartment.description` | `description` |
| `apartment.features` | `Apartment.features` (JSON) | `features` |
| `apartment.images.main` | `ApartmentImage` (type=main) | `images[0].imageUrl` |

**Note:** The frontend currently uses `apartment.images.main`, `apartment.images.kitchen`, etc. Your backend should either:
- Return images as a map keyed by `imageType` 
- Or update the frontend to use an images array

---

This specification gives you everything needed to build the Spring Boot backend externally while ensuring perfect integration with the existing frontend.
