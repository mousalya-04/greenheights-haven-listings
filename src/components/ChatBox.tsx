
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Bot, User, Home, MapPin, Phone, Calendar } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const ChatBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "👋 Hello! I'm your MR Residencies assistant. How can I help you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const quickReplies = [
    { text: "Available Apartments", icon: Home },
    { text: "Location & Directions", icon: MapPin },
    { text: "Contact Information", icon: Phone },
    { text: "Schedule a Visit", icon: Calendar }
  ];

  const getAutoReply = (message: string): string => {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('price') || lowerMessage.includes('cost') || lowerMessage.includes('rent')) {
      return "💰 Our apartment pricing ranges from ₹25,000 to ₹85,000 per month depending on the block and size. Would you like specific pricing for a particular apartment type?";
    }
    
    if (lowerMessage.includes('available') || lowerMessage.includes('vacancy')) {
      return "🏠 We currently have apartments available in all blocks! Block A (Garden View), Block B (Premium), Block C (Fitness Hub), Block D (Family Zone), and Block E (Executive). Which type interests you?";
    }
    
    if (lowerMessage.includes('location') || lowerMessage.includes('address') || lowerMessage.includes('direction')) {
      return "📍 MR Residencies is located at Main Avenue Road, Coimbatore, Tamil Nadu – 641001. We're easily accessible by public transport and have ample parking. Need specific directions?";
    }
    
    if (lowerMessage.includes('facilities') || lowerMessage.includes('amenities')) {
      return "🌟 Our premium facilities include: Rooftop Gardens, Fully-equipped Gym, Swimming Pool, Open Air Theatre, Kids Playground, 24/7 Security, Power Backup, and High-speed Internet. What would you like to know more about?";
    }
    
    if (lowerMessage.includes('visit') || lowerMessage.includes('tour') || lowerMessage.includes('appointment')) {
      return "📅 I'd be happy to schedule a visit for you! Our property tours are available Monday-Friday (9 AM-7 PM), Saturday (9 AM-5 PM), and Sunday (10 AM-4 PM). What day works best for you?";
    }
    
    if (lowerMessage.includes('contact') || lowerMessage.includes('phone') || lowerMessage.includes('call')) {
      return "📞 You can reach us at +91 98765 43210 (available 24/7) or email support@mrresidencies.com. Our office hours are Mon-Fri: 9 AM-7 PM, Sat: 9 AM-5 PM, Sun: 10 AM-4 PM.";
    }
    
    if (lowerMessage.includes('block') || lowerMessage.includes('type')) {
      return "🏢 We have 5 distinct blocks: Block A (Garden View with rooftop gardens), Block B (Premium living), Block C (Fitness-focused with gym), Block D (Family-friendly), and Block E (Executive luxury). Which block interests you most?";
    }
    
    if (lowerMessage.includes('security') || lowerMessage.includes('safety')) {
      return "🔒 Security is our top priority! We have 24/7 professional security, CCTV surveillance, secure entry systems, and emergency response protocols. Your safety and peace of mind are guaranteed.";
    }
    
    if (lowerMessage.includes('parking') || lowerMessage.includes('car')) {
      return "🚗 We provide covered parking for all residents with additional visitor parking. Each apartment comes with designated parking spots. Electric vehicle charging stations are also available.";
    }
    
    if (lowerMessage.includes('pet') || lowerMessage.includes('dog') || lowerMessage.includes('cat')) {
      return "🐕 Yes, we are pet-friendly! We welcome your furry family members with open arms. We have designated pet areas and walking spaces within the complex.";
    }
    
    return "Thank you for your question! For detailed information, I'd recommend speaking with our leasing team at +91 98765 43210 or visiting our office. Is there anything specific about our apartments or facilities you'd like to know?";
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        text: getAutoReply(inputMessage),
        isUser: false,
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botReply]);
      setIsTyping(false);
    }, 1500);
  };

  const handleQuickReply = (text: string) => {
    setInputMessage(text);
    handleSendMessage();
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-br from-pink-600 to-pink-700 text-white rounded-full professional-shadow-lg flex items-center justify-center transition-all duration-300 z-50 ${!isOpen ? 'hover:scale-110 professional-glow' : 'scale-0'}`}
        style={{ display: isOpen ? 'none' : 'flex' }}
      >
        <MessageCircle size={24} />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[500px] card-glass professional-shadow-lg rounded-2xl border border-pink-600/30 flex flex-col z-50">
          {/* Header */}
          <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <Bot size={20} />
              </div>
              <div>
                <h3 className="font-semibold">MR Assistant</h3>
                <p className="text-xs text-pink-100">Online • Ready to help</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/80 hover:text-white transition-colors"
            >
              <X size={20} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`flex items-start space-x-2 max-w-[80%] ${message.isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    message.isUser 
                      ? 'bg-gradient-to-br from-pink-600 to-pink-700' 
                      : 'bg-gray-700'
                  }`}>
                    {message.isUser ? <User size={16} className="text-white" /> : <Bot size={16} className="text-gray-300" />}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-2xl ${
                      message.isUser
                        ? 'bg-gradient-to-r from-pink-600 to-pink-700 text-white'
                        : 'bg-gray-800 text-gray-200'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                    <p className={`text-xs mt-1 ${message.isUser ? 'text-pink-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="flex items-start space-x-2">
                  <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                    <Bot size={16} className="text-gray-300" />
                  </div>
                  <div className="bg-gray-800 px-4 py-2 rounded-2xl">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Replies */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <p className="text-xs text-gray-400 mb-2">Quick options:</p>
              <div className="grid grid-cols-2 gap-2">
                {quickReplies.map((reply, index) => {
                  const IconComponent = reply.icon;
                  return (
                    <button
                      key={index}
                      onClick={() => handleQuickReply(reply.text)}
                      className="flex items-center space-x-2 text-xs bg-gray-800/50 text-gray-300 px-3 py-2 rounded-lg hover:bg-pink-600/20 hover:text-pink-400 transition-all"
                    >
                      <IconComponent size={12} />
                      <span>{reply.text}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t border-gray-700">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-gray-800/50 text-white rounded-xl border border-gray-600 focus:ring-2 focus:ring-pink-600 focus:border-transparent placeholder-gray-400 text-sm"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim()}
                className="w-10 h-10 bg-gradient-to-r from-pink-600 to-pink-700 text-white rounded-xl flex items-center justify-center hover:from-pink-700 hover:to-pink-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
