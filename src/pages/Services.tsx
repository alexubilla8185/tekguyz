import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Settings, 
  Shield, 
  FileText, 
  Globe, 
  Server,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const Services = () => {
  const services = [
    {
      icon: Settings,
      title: "Tech Consulting",
      description: "We provide strategic guidance to align your technology with your business goals. Our experts help you navigate complex challenges, from cloud adoption and infrastructure optimization to implementing a full-scale DevOps transformation. We create a clear roadmap for innovation, scalability, and long-term success.",
      ctaText: "Plan Your Strategy",
      gradient: "from-blue-600 to-blue-700"
    },
    {
      icon: Code2,
      title: "Custom Software Development",
      description: "From concept to deployment, we build robust, scalable, and secure software solutions tailored to your specific needs. Our agile development process and expertise in CI/CD pipelines ensure we deliver high-quality code efficiently, providing you with a competitive edge in the market.",
      ctaText: "Build Your Solution",
      gradient: "from-slate-600 to-slate-700"
    },
    {
      icon: Shield,
      title: "QA and Testing",
      description: "Ensure your applications are reliable, performant, and secure with our comprehensive QA and testing services. We specialize in automated testing, performance analysis, and security audits, integrating quality assurance directly into the development lifecycle to reduce bugs and accelerate release cycles.",
      ctaText: "Ensure Quality",
      gradient: "from-emerald-600 to-emerald-700"
    },
    {
      icon: FileText,
      title: "Technical Writing",
      description: "Clear, concise documentation is crucial for success. We create professional technical documentation for your products, APIs, and internal processes. Our services empower your development teams and end-users with the information they need to succeed.",
      ctaText: "Improve Your Docs",
      gradient: "from-cyan-600 to-cyan-700"
    },
    {
      icon: Globe,
      title: "Web Design & Management",
      description: "We design, build, and manage high-performance websites that are both visually appealing and technically sound. Our focus is on creating secure, fast, and SEO-friendly web experiences that are easy to manage and scale as your business grows.",
      ctaText: "Launch Your Website",
      gradient: "from-indigo-600 to-indigo-700"
    },
    {
      icon: Server,
      title: "Domain & DNS Management",
      description: "Build your online presence on a foundation of reliability and security. We manage your domain portfolio and configure your DNS for maximum uptime, performance, and protection against threats, ensuring your services are always available to your customers.",
      ctaText: "Secure Your Domain",
      gradient: "from-violet-600 to-violet-700"
    }
  ];

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                <div className="p-8">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.gradient} mb-6`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-orange-600 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* CTA Button - Now Center Aligned */}
                  <div className="flex justify-center">
                    <Link to="/contact">
                      <Button
                        borderRadius="1.75rem"
                        className="bg-gray-100 hover:bg-gray-200 text-gray-700 border-gray-300"
                        containerClassName="w-auto"
                      >
                        {service.ctaText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className={`h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: "Discovery", desc: "Understanding your needs and challenges" },
              { title: "Strategy", desc: "Developing a tailored solution approach" },
              { title: "Implementation", desc: "Building and deploying your solution" },
              { title: "Support", desc: "Ongoing maintenance and optimization" }
            ].map((phase, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.title}</h3>
                <p className="text-gray-600">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss your project requirements and how we can help you achieve your goals.
            </p>
            
            <Link to="/contact">
              <Button
                borderRadius="1.75rem"
                className="bg-white text-blue-600 border-white hover:bg-gray-50"
                containerClassName="w-auto"
              >
                Contact Us Today
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;