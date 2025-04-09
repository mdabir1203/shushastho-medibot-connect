
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Connect on WhatsApp",
    description: "Add Shushastho's WhatsApp number to your contacts and start a conversation.",
    color: "from-shushastho-400 to-shushastho-600"
  },
  {
    number: "02",
    title: "Describe Your Needs",
    description: "Tell our AI about the medicines you need or upload a prescription photo.",
    color: "from-shushastho-500 to-shushastho-700"
  },
  {
    number: "03",
    title: "Verification Process",
    description: "Our AI and healthcare team verify your request for safety and accuracy.",
    color: "from-accent-400 to-accent-600"
  },
  {
    number: "04",
    title: "Confirm & Pay",
    description: "Review the medicine details and select your preferred payment method.",
    color: "from-accent-500 to-accent-700"
  },
  {
    number: "05",
    title: "Quick Delivery",
    description: "Receive your medicine within 24-48 hours directly at your doorstep.",
    color: "from-shushastho-600 to-accent-600"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Shushastho Works</h2>
          <p className="text-lg text-gray-600">
            Getting your medicines through Shushastho is simple, secure, and reliable.
            Follow these easy steps:
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-0 bottom-0 left-1/2 w-0.5 bg-gradient-to-b from-shushastho-300 to-accent-300 hidden md:block"></div>
          
          <div className="space-y-16 relative">
            {steps.map((step, index) => (
              <div key={index} className={`md:flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} animate-on-scroll`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 text-right' : 'md:pl-16 text-left'} hidden md:block`}>
                  <h3 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 max-w-md ml-auto">{step.description}</p>
                </div>
                
                <div className="md:w-12 relative flex justify-center mb-6 md:mb-0">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center text-white font-bold shadow-lg z-10`}>
                    {index + 1}
                  </div>
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-16' : 'md:pr-16'} md:hidden`}>
                  <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-700 to-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
