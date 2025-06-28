
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-display font-bold text-shushastho-700">
              Shushastho
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors">Features</a>
            <a href="#how-it-works" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors">How It Works</a>
            <a href="#impact" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors">Impact</a>
            <a href="#about" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors">About Us</a>
            <Link to="/demo">
              <Button variant="outline" className="mr-2">
                Try Demo
              </Button>
            </Link>
            <Button 
              className="bg-gradient-to-r from-shushastho-600 to-accent-600 hover:from-shushastho-700 hover:to-accent-700 text-white"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors py-2">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors py-2">How It Works</a>
              <a href="#impact" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors py-2">Impact</a>
              <a href="#about" className="text-gray-700 hover:text-shushastho-600 font-medium transition-colors py-2">About Us</a>
              <Link to="/demo" className="py-2">
                <Button variant="outline" className="w-full mb-2">
                  Try Demo
                </Button>
              </Link>
              <Button 
                className="bg-gradient-to-r from-shushastho-600 to-accent-600 hover:from-shushastho-700 hover:to-accent-700 text-white w-full"
              >
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
