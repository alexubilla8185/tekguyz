import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, Target, Award } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage in their markets."
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success. We're committed to delivering results that exceed expectations and drive real business value."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in code quality, security practices, and project delivery through rigorous testing and continuous improvement."
    }
  ];

  return (
    <div className="pt-16 min-h-screen">
      {/* Hero Section */}
      <section className="py-20" style={{ backgroundColor: '#3a63da' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About TEKGUYZ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              We're a team of passionate technologists dedicated to helping businesses 
              leverage the full power of modern technology and DevOps practices.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">25+</div>
              <div className="text-white/80">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <div className="text-white/80">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At TEKGUYZ, we believe that technology should be an enabler, not a barrier. 
                Our mission is to bridge the gap between complex technical solutions and 
                business objectives, making advanced technology accessible and actionable 
                for organizations of all sizes.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to delivering not just technical excellence, but strategic 
                value that drives measurable business outcomes and long-term growth for our clients.
              </p>
              
              <Link to="/services">
                <Button
                  borderRadius="1.75rem"
                  className="bg-blue-600 hover:bg-blue-700 text-white border-blue-500"
                  containerClassName="w-auto"
                >
                  Our Services
                </Button>
              </Link>
            </div>

            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to technology consulting.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
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
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your technology landscape? Our team is here to help you succeed.
            </p>
            
            <Link to="/contact">
              <Button
                borderRadius="1.75rem"
                className="bg-white text-blue-600 border-white hover:bg-gray-50"
                containerClassName="w-auto"
              >
                Get In Touch
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;