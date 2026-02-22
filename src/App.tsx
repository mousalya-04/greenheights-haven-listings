import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ChatBox from "./components/ChatBox";
import Home from "./pages/Home";
import Apartments from "./pages/Apartments";
import Facilities from "./pages/Facilities";
import FacilityDetails from "./pages/FacilityDetails";
import Reviews from "./pages/Reviews";
import Contact from "./pages/Contact";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import BlockDetails from "./pages/BlockDetails";
import ApartmentDetails from "./pages/ApartmentDetails";
import ScheduleVisit from "./pages/ScheduleVisit";
import VirtualTour from "./pages/VirtualTour";
import BookingHistory from "./pages/BookingHistory";
import Profile from "./pages/Profile";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={
                <>
                  <Navbar />
                  <main className="flex-1"><Home /></main>
                  <Footer />
                  <ChatBox />
                </>
              } />
              <Route path="/*" element={
                <>
                  <Navbar />
                  <main className="flex-1">
                    <Routes>
                      <Route path="/apartments" element={<Apartments />} />
                      <Route path="/apartment/:id" element={<ApartmentDetails />} />
                      <Route path="/block/:blockId" element={<BlockDetails />} />
                      <Route path="/facilities" element={<Facilities />} />
                      <Route path="/facility/:facilityId" element={<FacilityDetails />} />
                      <Route path="/schedule-visit" element={<ScheduleVisit />} />
                      <Route path="/reviews" element={<Reviews />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/favorites" element={<Favorites />} />
                      <Route path="/cart" element={<Cart />} />
                      <Route path="/virtual-tour" element={<VirtualTour />} />
                      <Route path="/bookings" element={<BookingHistory />} />
                      <Route path="/profile" element={<Profile />} />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </main>
                  <Footer />
                  <ChatBox />
                </>
              } />
            </Routes>
          </div>
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
