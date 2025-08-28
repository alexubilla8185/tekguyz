import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Sun, Palmtree, Mail, Phone, Linkedin, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t-4 border-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="flex items-center space-x-1">
                <div className="p-3 bg-gray-800 rounded-full">
                  <Code className="h-6 w-6 text-gray-300" />
                </div>
                <div className="p-3 bg-blue-800 rounded-full">
                  <Sun className="h-5 w-5 text-blue-400" />
                </div>
                <div className="p-3 bg-gray-800 rounded-full">
                  <Palmtree className="h-5 w-5 text-gray-300" />
                </div>
              </div>
              <span className="text-2xl font-bold text-white">TEKGUYZ</span>
            </Link>
            
            <p className="text-gray-300 mb-8 max-w-lg leading-relaxed">
              Your trusted tech partner, delivering cutting-edge DevOps solutions, 
              custom software development, and expert consulting to accelerate your business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="mailto:info@tekguyz.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  info@tekguyz.com
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="tel:+13058575258" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  +1 (305) 857-5258
                </a>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex flex-col justify-center">
            <h3 className="text-white font-semibold text-lg mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Linkedin className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="https://linkedin.com/company/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  LinkedIn
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Instagram className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="https://instagram.com/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Instagram
                </a>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Facebook className="h-5 w-5 text-white" />
                </div>
                <a 
                  href="https://facebook.com/tekguyz" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors duration-200 text-lg"
                >
                  Facebook
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 TEKGUYZ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;