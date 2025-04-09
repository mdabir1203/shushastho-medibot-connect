
import React from 'react';

const ImpactCounter = ({ value, label }: { value: string, label: string }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-shushastho-600 to-accent-600 mb-2">
        {value}
      </div>
      <p className="text-gray-600">{label}</p>
    </div>
  );
};

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Impact</h2>
          <p className="text-lg text-gray-600">
            Shushastho is changing how rural communities access healthcare. 
            Here's our impact so far:
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <ImpactCounter value="175+" label="Villages Served" />
          <ImpactCounter value="15,000+" label="Patients Helped" />
          <ImpactCounter value="28,000+" label="Medicines Delivered" />
          <ImpactCounter value="92%" label="Reduction in Travel Time" />
        </div>
        
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gradient-to-br from-shushastho-600 to-accent-600 p-8 md:p-12 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Transforming Rural Healthcare Access</h3>
              <p className="mb-6 opacity-90">
                In many rural areas, residents must travel for hours to reach the nearest pharmacy. 
                Shushastho is bridging this gap with technology and innovation.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3.5 h-3.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="opacity-90">Reduced transportation costs by 85% for patients</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3.5 h-3.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="opacity-90">Increased medication adherence by 73%</p>
                </div>
                
                <div className="flex items-start">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mr-3 mt-0.5">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="w-3.5 h-3.5"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="opacity-90">Provided essential medicines to 35+ underserved communities</p>
                </div>
              </div>
            </div>
            
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold mb-6">Testimonials</h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-shushastho-500 pl-4">
                  <p className="italic text-gray-600 mb-3">
                    "Shushastho has been a blessing for our village. Before, I had to travel 3 hours to get my blood pressure medication. Now, it comes right to my door."
                  </p>
                  <p className="font-medium">- Rahima B., Nilphamari District</p>
                </div>
                
                <div className="border-l-4 border-accent-500 pl-4">
                  <p className="italic text-gray-600 mb-3">
                    "As a community health worker, I've seen how Shushastho has improved medication compliance. People no longer miss doses because they can't travel to pharmacies."
                  </p>
                  <p className="font-medium">- Dr. Karim A., Rural Health Initiative</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
