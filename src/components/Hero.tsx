import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Zap } from 'lucide-react';
import { Button } from './ui/moving-border';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0ibTM2IDM0IC0yIDIgLTIgLTIgMiAtMiAyIDJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-40"></div>
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/10 to-slate-900/10"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="mb-6">
              <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-900/20 text-blue-300 border border-blue-800/30">
                <Shield className="h-4 w-4 mr-2" />
                Trusted Technology Partner
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Enterprise-Grade
              <span className="text-blue-400 block">
                DevOps Solutions
              </span>
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed max-w-2xl">
              Transform your infrastructure with cutting-edge DevOps practices, 
              custom software development, and strategic technology consulting 
              that drives measurable business results.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/contact">
                <Button
                  borderRadius="0.5rem"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500 px-8 py-3 font-semibold"
                  containerClassName="w-auto"
                >
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>

              <Link to="/services">
                <Button
                  borderRadius="0.5rem"
                  className="bg-slate-800 hover:bg-slate-700 text-white border-slate-600 px-8 py-3 font-semibold"
                  containerClassName="w-auto"
                >
                  View Services
                </Button>
              </Link>
            </div>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: CheckCircle, text: "99.9% Uptime Guarantee" },
                { icon: Zap, text: "Rapid Deployment" },
                { icon: Shield, text: "Enterprise Security" },
                { icon: ArrowRight, text: "24/7 Support" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-600/20 rounded-lg flex items-center justify-center">
                    <benefit.icon className="h-4 w-4 text-blue-400" />
                  </div>
                  <span className="text-slate-300 text-sm font-medium">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Stats/Visual */}
          <div className="relative">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-8">
              <h3 className="text-xl font-semibold text-white mb-6">Proven Results</h3>
              
              <div className="space-y-6">
                {[
                  { metric: "50+", label: "Enterprise Clients", sublabel: "Fortune 500 companies" },
                  { metric: "99.9%", label: "System Uptime", sublabel: "Industry-leading reliability" },
                  { metric: "25+", label: "Years Experience", sublabel: "Deep technical expertise" },
                  { metric: "24/7", label: "Support Coverage", sublabel: "Global support team" }
                ].map((stat, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-slate-700/50 last:border-b-0">
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.metric}</div>
                      <div className="text-slate-300 font-medium">{stat.label}</div>
                      <div className="text-slate-400 text-sm">{stat.sublabel}</div>
                    </div>
                    <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-blue-400" />
                    </div>
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