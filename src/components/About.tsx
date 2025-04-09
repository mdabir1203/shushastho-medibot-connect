
import React from 'react';
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-shushastho-500 to-accent-500 rounded-3xl blur-lg opacity-30 -z-10"></div>
              <div className="relative bg-white rounded-3xl p-6 shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-shushastho-50 rounded-xl p-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shushastho-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-shushastho-700">Rural Access</h3>
                    </div>
                  </div>
                  
                  <div className="bg-accent-50 rounded-xl p-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-accent-700">Health Security</h3>
                    </div>
                  </div>
                  
                  <div className="bg-accent-50 rounded-xl p-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-accent-700">Technology</h3>
                    </div>
                  </div>
                  
                  <div className="bg-shushastho-50 rounded-xl p-4 h-48 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 mx-auto rounded-full bg-white flex items-center justify-center mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-shushastho-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                        </svg>
                      </div>
                      <h3 className="font-medium text-shushastho-700">Community</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-shushastho-500 to-accent-500 mb-6 rounded-full"></div>
            
            <p className="text-gray-700 mb-6">
              At Shushastho, we believe that access to essential medicines shouldn't depend on where you live. 
              Our mission is to leverage technology to break down barriers to healthcare access in rural and underserved areas.
            </p>
            
            <p className="text-gray-700 mb-8">
              Founded by a team of healthcare professionals, technologists, and rural development experts, 
              Shushastho was born from a simple observation: while medical knowledge and treatments have advanced tremendously, 
              delivery systems haven't kept pace in rural regions.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-shushastho-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-3.5 h-3.5 text-shushastho-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">We partner with certified pharmacies and healthcare providers</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-shushastho-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-3.5 h-3.5 text-shushastho-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">Our AI is trained by medical professionals and ethically designed</p>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 rounded-full bg-shushastho-100 flex items-center justify-center mr-3 mt-0.5">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-3.5 h-3.5 text-shushastho-600"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <p className="text-gray-700">We employ local delivery personnel, creating jobs in rural communities</p>
              </div>
            </div>
            
            <Button className="bg-gradient-to-r from-shushastho-600 to-accent-600 hover:from-shushastho-700 hover:to-accent-700 text-white">
              Join Our Mission
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
