
import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative pt-28 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-shushastho-50/50 to-transparent -z-10"></div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iLjAyIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIxLTEuNzktNC00LTRzLTQgMS43OS00IDQgMS43OSA0IDQgNCAzLjk4LTEuNzggNC00em0tNCA2Yy0zLjMxNCAwLTYtMi42ODYtNi02czIuNjg2LTYgNi02IDYgMi42ODYgNiA2LTIuNjg2IDYtNiA2eiIvPjwvZz48L2c+PC9zdmc+')] bg-center opacity-50 -z-10"></div>
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-shushastho-700 to-accent-700">
              Medical Care In Rural Areas, Powered By WhatsApp AI
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Shushastho delivers essential medicines to those who need them most in rural areas, 
              using the accessibility of WhatsApp and the power of AI.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button size="lg" className="bg-gradient-to-r from-shushastho-600 to-accent-600 hover:from-shushastho-700 hover:to-accent-700 text-white shadow-lg">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-shushastho-600 text-shushastho-700 hover:bg-shushastho-50">
                Learn More
              </Button>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-shushastho-100 flex items-center justify-center text-xs font-medium text-shushastho-700">+2k</div>
                <div className="w-8 h-8 rounded-full bg-accent-100 flex items-center justify-center text-xs font-medium text-accent-700">+5k</div>
                <div className="w-8 h-8 rounded-full bg-shushastho-100 flex items-center justify-center text-xs font-medium text-shushastho-700">+7k</div>
              </div>
              <p className="text-sm text-gray-600">
                Trusted by <span className="font-semibold">thousands</span> in rural communities
              </p>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-shushastho-500 to-accent-500 rounded-3xl blur-xl opacity-50 -z-10"></div>
            <div className="relative glass-card rounded-3xl p-6 shadow-xl">
              <div className="flex items-center space-x-3 pb-4 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-shushastho-100 flex items-center justify-center">
                  <span className="text-shushastho-600 text-lg font-bold">S</span>
                </div>
                <div>
                  <h3 className="text-md font-medium">Shushastho WhatsApp</h3>
                  <p className="text-xs text-gray-500">AI Healthcare Assistant</p>
                </div>
              </div>
              
              <div className="mt-6 space-y-4">
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">Hello! I need some medicine for my mother's high blood pressure.</p>
                </div>
                
                <div className="bg-shushastho-100 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                  <p className="text-sm">I'll help you with that. Could you tell me what medicine she usually takes?</p>
                </div>
                
                <div className="bg-gray-100 p-3 rounded-lg rounded-tl-none max-w-[80%]">
                  <p className="text-sm">She takes Amlodipine 5mg.</p>
                </div>
                
                <div className="bg-shushastho-100 p-3 rounded-lg rounded-tr-none ml-auto max-w-[80%]">
                  <p className="text-sm">Great! I've found Amlodipine 5mg in our inventory. Would you like to confirm delivery to your village?</p>
                </div>
                
                <div className="flex space-x-2 items-center">
                  <div className="flex-1 h-10 bg-white border border-gray-200 rounded-full px-4 text-sm flex items-center">
                    Type a message...
                  </div>
                  <Button size="sm" className="rounded-full w-10 h-10 p-0 bg-shushastho-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                    </svg>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
