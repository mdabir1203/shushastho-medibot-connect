
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, User, Calendar, Clock, MapPin, Check } from "lucide-react";

const features = [
  {
    icon: <MessageCircle className="h-10 w-10 text-shushastho-600" />,
    title: "WhatsApp Integration",
    description: "Access healthcare services through WhatsApp, the most widely used messaging app in rural areas."
  },
  {
    icon: <User className="h-10 w-10 text-shushastho-600" />,
    title: "AI-Powered Assistance",
    description: "Our AI assistant understands medical needs, verifies prescriptions, and arranges deliveries."
  },
  {
    icon: <MapPin className="h-10 w-10 text-shushastho-600" />,
    title: "Rural Area Focus",
    description: "Specifically designed to reach underserved communities with limited access to pharmacies."
  },
  {
    icon: <Clock className="h-10 w-10 text-shushastho-600" />,
    title: "Quick Delivery",
    description: "Medicines delivered within 24-48 hours, even to remote locations."
  },
  {
    icon: <Calendar className="h-10 w-10 text-shushastho-600" />,
    title: "Medication Reminders",
    description: "Automatic reminders for refills and medication schedules through WhatsApp."
  },
  {
    icon: <Check className="h-10 w-10 text-shushastho-600" />,
    title: "Verified Medications",
    description: "All medicines are sourced from certified suppliers, ensuring quality and authenticity."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Features That Make A Difference</h2>
          <p className="text-lg text-gray-600">
            Shushastho combines accessibility, technology, and healthcare expertise to deliver
            essential medicines to those who need them most.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-100 shadow-md hover:shadow-lg transition-shadow duration-300 animate-on-scroll">
              <CardHeader className="pb-2">
                <div className="mb-2">{feature.icon}</div>
                <CardTitle className="text-xl font-bold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
