
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, User, Bot } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! 👋 Welcome to MR Residencies. I'm here to help you with any questions about our apartments, facilities, or services. How can I assist you today?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('rent') || lowerMessage.includes('cost')) {
      return "Our apartments range from ₹20,000 to ₹40,000 per month depending on the size and block. Would you like specific pricing for a particular type of apartment?";
    }
    if (lowerMessage.includes('available') || lowerMessage.includes('vacancy')) {
      return "We have several apartments available across different blocks. You can check our Apartments page for real-time availability or I can help you find something specific. What type of apartment are you looking for?";
    }
    if (lowerMessage.includes('facilities') || lowerMessage.includes('amenities')) {
      return "We offer amazing facilities including: 🏊‍♂️ Swimming Pool, 💪 Gym & Fitness Center, 🌿 Rooftop Gardens, 🎭 Open Air Theatre, 🏃‍♂️ Jogging Track, and much more! Would you like details about any specific facility?";
    }
    if (lowerMessage.includes('visit') || lowerMessage.includes('tour') || lowerMessage.includes('schedule')) {
      return "I'd be happy to help you schedule a visit! You can use our Schedule Visit page or call us at +91 98765 43210. When would be convenient for you?";
    }
    if (lowerMessage.includes('location') || lowerMessage.includes('address')) {
      return "We're located at Main Avenue Road, Coimbatore, Tamil Nadu – 641001. It's a prime location with easy access to schools, hospitals, and shopping centers.";
    }
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('email')) {
      return "You can reach us at:\n📞 Phone: +91 98765 43210\n📧 Email: support@mrresidencies.com\nOr visit our Contact page for more details!";
    }
    if (lowerMessage.includes('block') || lowerMessage.includes('building')) {
      return "We have 5 blocks: Block A (Garden View), Block B (Premium Living), Block C (Fitness Hub), Block D (Family Zone), and Block E (Executive Suites). Each has unique features and amenities.";
    }
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
      return "Hello! 😊 Great to hear from you! How can I help you find your perfect home at MR Residencies today?";
    }
    if (lowerMessage.includes('thank')) {
      return "You're very welcome! 😊 If you have any other questions about MR Residencies, feel free to ask. We're here to help make your home search as smooth as possible!";
    }
    
    return "That's a great question! For detailed information about that topic, I'd recommend checking our website pages or calling our team at +91 98765 43210. They can provide you with comprehensive details. Is there anything else I can help you with?";
  };

  const handleSendMessage = async () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getBotResponse(inputText),
        isBot: true,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-2xl transition-all duration-300 ${
          isOpen 
            ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
            : 'bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-500 hover:to-gray-600'
        } flex items-center justify-center group`}
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white group-hover:scale-110 transition-transform" />
        )}
        {!isOpen && (
          <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 h-96 bg-gray-900/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-700 flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-slate-600 to-gray-700 p-4 rounded-t-2xl">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Bot size={16} className="text-gray-800" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-sm">MR Assistant</h3>
                <p className="text-slate-200 text-xs">Online • Ready to help</p>
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isBot ? '' : 'flex-row-reverse space-x-reverse'}`}>
                  <div className={`w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isBot 
                      ? 'bg-gradient-to-br from-slate-500 to-gray-600' 
                      : 'bg-gradient-to-br from-blue-500 to-blue-600'
                  }`}>
                    {message.isBot ? (
                      <Bot size={12} className="text-white" />
                    ) : (
                      <User size={12} className="text-white" />
                    )}
                  </div>
                  <div className={`p-3 rounded-2xl ${
                    message.isBot 
                      ? 'bg-gray-800 text-gray-100' 
                      : 'bg-gradient-to-br from-blue-600 to-blue-700 text-white'
                  }`}>
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.isBot ? 'text-gray-400' : 'text-blue-100'
                    }`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-6 h-6 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full flex items-center justify-center">
                    <Bot size={12} className="text-white" />
                  </div>
                  <div className="bg-gray-800 p-3 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 bg-gray-800 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-slate-500 focus:border-transparent text-sm placeholder-gray-400"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputText.trim()}
                className="w-10 h-10 bg-gradient-to-r from-slate-600 to-gray-700 hover:from-slate-500 hover:to-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl flex items-center justify-center transition-all"
              >
                <Send size={16} className="text-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
