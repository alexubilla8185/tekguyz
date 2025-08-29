import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap, Users, Award } from 'lucide-react';
import { Button } from './ui/moving-border';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-30 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-full blur-3xl opacity-40 translate-y-48 -translate-x-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-8">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
                <Shield className="h-4 w-4 mr-2" />
                Expert Technology Solutions
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Your
              <span className="text-blue-600 block">
                Digital Future
              </span>
            </h1>

            <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-2xl">
              Partner with TEKGUYZ for cutting-edge DevOps solutions, custom software development, 
              and strategic technology consulting that drives measurable business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button
                  borderRadius="0.5rem"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-600 px-8 py-4 font-semibold text-lg"
                  containerClassName="w-auto"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  borderRadius="0.5rem"
                  className="bg-gray-900 hover:bg-gray-800 text-white border-gray-900 px-8 py-4 font-semibold text-lg"
                  containerClassName="w-auto"
                >
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: CheckCircle, text: "99.9% Uptime" },
                { icon: Zap, text: "Rapid Deployment" },
                { icon: Shield, text: "Robust Security" },
                { icon: Users, text: "24/7 Support" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Professional Stats Card */}
          <div className="relative">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Trusted by Valued Clients</h3>
                <p className="text-gray-600">Delivering excellence for businesses of all sizes</p>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                {[
                  { metric: "50+", label: "Valued Clients", sublabel: "Serving diverse industries" },
                  { metric: "99.9%", label: "System Uptime", sublabel: "Industry-leading reliability" },
                  { metric: "25+", label: "Years Experience", sublabel: "Deep technical expertise" },
                  { metric: "24/7", label: "Support Coverage", sublabel: "Global support team" }
                ].map((stat, index) => (
                  <div key={index} className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{stat.metric}</div>
                    <div className="text-gray-900 font-semibold text-sm mb-1">{stat.label}</div>
                    <div className="text-gray-500 text-xs">{stat.sublabel}</div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;