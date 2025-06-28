import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Send, ArrowLeft, Phone, MoreVertical, Camera, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  image?: string;
}

const Demo = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Shushastho AI. I can help you order medicines and read your prescriptions. Upload a prescription image or ask me anything about healthcare!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const botResponses = {
    'medicine': "I can help you find and order medicines. What specific medication do you need? Please share your prescription or tell me the medicine name.",
    'paracetamol': "Paracetamol is available. Standard dosage is 500mg tablets. Do you have a prescription? I can arrange delivery to your location within 24-48 hours.",
    'prescription': "I can read your prescription! Please upload an image and I'll extract the medicine details, dosage instructions, and help you order them.",
    'delivery': "We deliver medicines to rural areas within 24-48 hours. What's your location? Our delivery network covers most remote areas.",
    'emergency': "For medical emergencies, please contact your nearest hospital immediately. I can help you find the closest medical facility or arrange medicine delivery for ongoing treatment.",
    'help': "I can assist with: 📋 Reading prescriptions, 💊 Medicine ordering, 🚚 Delivery tracking, 🏥 Finding nearby clinics, ⏰ Medication reminders. What would you like help with?",
    'upload': "Perfect! I can read prescription images. The image shows your prescribed medicines. Let me extract the details for you.",
    'default': "I understand you need healthcare assistance. Could you please tell me more specifically how I can help? You can ask about medicines, upload prescriptions, or inquire about deliveries."
  };

  const analyzePrescription = (imageUrl: string): string => {
    // Simulated prescription analysis
    const sampleMedicines = [
      "Paracetamol 500mg - Take 1 tablet twice daily after meals",
      "Amoxicillin 250mg - Take 1 capsule three times daily for 7 days", 
      "Vitamin D3 1000IU - Take 1 tablet once daily"
    ];
    
    const randomMedicines = sampleMedicines.slice(0, Math.floor(Math.random() * 3) + 1);
    
    return `I've analyzed your prescription image. Here are the medicines I found:\n\n${randomMedicines.map((med, index) => `${index + 1}. ${med}`).join('\n')}\n\nWould you like me to help you order these medicines? I can arrange delivery to your location within 24-48 hours.`;
  };

  const generateBotResponse = (userMessage: string, hasImage: boolean = false): string => {
    if (hasImage) {
      return analyzePrescription('');
    }
    
    const message = userMessage.toLowerCase();
    
    if (message.includes('medicine') || message.includes('medication') || message.includes('drug')) {
      return botResponses.medicine;
    } else if (message.includes('paracetamol') || message.includes('acetaminophen')) {
      return botResponses.paracetamol;
    } else if (message.includes('prescription') || message.includes('doctor') || message.includes('upload')) {
      return botResponses.prescription;
    } else if (message.includes('delivery') || message.includes('shipping') || message.includes('order')) {
      return botResponses.delivery;
    } else if (message.includes('emergency') || message.includes('urgent') || message.includes('help me')) {
      return botResponses.emergency;
    } else if (message.includes('help') || message.includes('assist')) {
      return botResponses.help;
    } else {
      return botResponses.default;
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file (JPG, PNG, etc.)",
        variant: "destructive",
      });
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const imageUrl = e.target?.result as string;
      
      const userMessage: Message = {
        id: Date.now(),
        text: "I've uploaded my prescription image",
        sender: 'user',
        timestamp: new Date(),
        image: imageUrl
      };

      setMessages(prev => [...prev, userMessage]);
      setIsTyping(true);

      // Simulate bot analysis time
      setTimeout(() => {
        const botResponse: Message = {
          id: Date.now() + 1,
          text: generateBotResponse("", true),
          sender: 'bot',
          timestamp: new Date()
        };
        
        setMessages(prev => [...prev, botResponse]);
        setIsTyping(false);
      }, 2000);
    };
    
    reader.readAsDataURL(file);
    
    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate bot thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: generateBotResponse(inputMessage),
        sender: 'bot',
        timestamp: new Date()
      };
      
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const quickMessages = [
    "I need paracetamol",
    "Upload prescription",
    "What's the delivery time?",
    "Help with medicine ordering"
  ];

  const handleQuickMessage = (message: string) => {
    if (message === "Upload prescription") {
      fileInputRef.current?.click();
      return;
    }
    
    setInputMessage(message);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <Link to="/" className="inline-flex items-center text-shushastho-600 hover:text-shushastho-700 mb-4">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Home
          </Link>
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Try Shushastho AI Demo
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our WhatsApp-powered AI bot that reads prescriptions and helps rural communities access essential medicines. 
              Try uploading a prescription image below.
            </p>
          </div>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="h-[600px] flex flex-col overflow-hidden shadow-2xl border-0">
            {/* WhatsApp Header */}
            <div className="bg-[#25D366] text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[#25D366] font-bold text-sm">S</span>
                </div>
                <div>
                  <h3 className="font-semibold">Shushastho AI</h3>
                  <p className="text-xs text-green-100">Online</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <Phone className="h-5 w-5" />
                <MoreVertical className="h-5 w-5" />
              </div>
            </div>

            {/* Messages Area */}
            <CardContent className="flex-1 overflow-y-auto p-4 space-y-3 bg-[#ECE5DD]">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-[#DCF8C6] text-gray-800'
                        : 'bg-white text-gray-800 shadow-sm'
                    }`}
                  >
                    {message.image && (
                      <img 
                        src={message.image} 
                        alt="Prescription" 
                        className="w-full h-32 object-cover rounded-lg mb-2"
                      />
                    )}
                    <p className="text-sm whitespace-pre-line">{message.text}</p>
                    <p className="text-xs text-gray-500 mt-1">
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </CardContent>

            {/* Quick Response Buttons */}
            <div className="p-3 bg-white border-t">
              <div className="grid grid-cols-2 gap-2 mb-3">
                {quickMessages.map((message, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="sm"
                    className="text-xs p-2 h-auto"
                    onClick={() => handleQuickMessage(message)}
                  >
                    {message === "Upload prescription" && (
                      <Camera className="h-3 w-3 mr-1" />
                    )}
                    {message}
                  </Button>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-white border-t flex items-center space-x-2">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <Button
                variant="outline"
                size="sm"
                onClick={() => fileInputRef.current?.click()}
                disabled={isTyping}
                className="p-2"
              >
                <Upload className="h-4 w-4" />
              </Button>
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Type a message..."
                className="flex-1"
                disabled={isTyping}
              />
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() || isTyping}
                size="sm"
                className="bg-[#25D366] hover:bg-[#20b358] text-white"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* Demo Instructions */}
          <Card className="mt-6 p-6 text-center">
            <h3 className="font-semibold mb-2">How to use this demo</h3>
            <p className="text-sm text-gray-600 mb-4">
              Upload a prescription image or ask about medicines, delivery times, or use the quick response buttons above.
            </p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-medium text-shushastho-600">Try:</h4>
                <ul className="text-gray-600 mt-1 space-y-1">
                  <li>• Upload prescription image</li>
                  <li>• "I need paracetamol"</li>
                  <li>• "How does delivery work?"</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-shushastho-600">Features:</h4>
                <ul className="text-gray-600 mt-1 space-y-1">
                  <li>• Prescription reading</li>
                  <li>• Medicine ordering</li>
                  <li>• Delivery tracking</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Demo;
