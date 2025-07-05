import React from 'react';
import { Link } from 'react-router-dom';
import { Code, Sun, Palmtree, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                <Code className="h-8 w-8 text-orange-500" />
                <Sun className="h-6 w-6 text-yellow-500" />
                <Palmtree className="h-6 w-6 text-green-500" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">TEKGUYZ</span>
            </Link>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted tech partner, delivering cutting-edge DevOps solutions, 
              custom software development, and expert consulting to accelerate your business growth.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-orange-500" />
                <a href="mailto:info@tekguyz.com" className="text-gray-300 hover:text-white transition-colors">
                  info@tekguyz.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-orange-500" />
                <a href="tel:+13058575258" className="text-gray-300 hover:text-white transition-colors">
                  +1 (305) 857-5258
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 TEKGUYZ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;