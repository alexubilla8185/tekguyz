import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const Home = () => {
  const features = [
    "24/7 DevOps Monitoring & Support",
    "Custom Software Solutions",
    "Cloud Migration & Optimization",
    "Automated Testing & QA",
    "Technical Documentation",
    "Domain & DNS Management"
  ];

  return (
    <div className="pt-16">
      <Hero />
      
      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose TEKGUYZ?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep technical expertise with innovative thinking to deliver 
                solutions that not only work flawlessly but drive real business value for your organization.
              </p>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3"
                  >
                    <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/about">
                <Button
                  borderRadius="1.75rem"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                  containerClassName="w-auto"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            <div className="relative">
              <div className="bg-white border border-gray-200 p-8 rounded-2xl shadow-lg">
                <img
                  src="https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Team collaboration"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg shadow-sm">
                    <div className="text-2xl font-bold text-gray-600">100+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how we can help accelerate your digital transformation journey and drive meaningful results.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <Button
                  borderRadius="1.75rem"
                  className="bg-white text-slate-800 border-white hover:bg-gray-50"
                  containerClassName="w-auto"
                >
                  Schedule Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;