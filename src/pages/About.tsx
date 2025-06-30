import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Award, Linkedin, Twitter, Github } from 'lucide-react';
import { Button } from '../components/ui/moving-border';

const About = () => {
  const teamMembers = [
    {
      name: "Alejandro U",
      title: "Lead DevOps Engineer",
      bio: "10+ years of cloud infrastructure expertise with AWS, Azure, and GCP. Specializes in containerization, CI/CD automation, and scalable system architecture design. Miami native with a passion for innovation.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Sofia Martinez",
      title: "Principal Cloud Architect",
      bio: "Former tech lead at Fortune 500 companies. Expert in microservices architecture, Kubernetes orchestration, and enterprise-level digital transformation strategies. Loves the South Florida tech scene.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Alex Thompson",
      title: "Senior Full-Stack Developer",
      bio: "Passionate about creating scalable web applications. Specialized in React, Node.js, and modern JavaScript frameworks with expertise in database optimization. Enjoys coding by the beach.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Maria Gonzalez",
      title: "QA Engineering Manager",
      bio: "Quality assurance expert with extensive experience in automated testing frameworks, performance optimization, and security auditing for enterprise applications. Fort Lauderdale local.",
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Jordan Kim",
      title: "Technical Writer & Documentation Lead",
      bio: "Transforms complex technical concepts into clear, actionable documentation. Specializes in API documentation, user guides, and developer experience optimization. Sunshine State enthusiast.",
      image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Roberto Silva",
      title: "Infrastructure Security Specialist",
      bio: "Cybersecurity expert focused on DevSecOps practices, cloud security architecture, and compliance frameworks for regulated industries. Proud South Florida resident.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description: "We stay ahead of technology trends to provide cutting-edge solutions that give our clients a competitive advantage in the sunshine state."
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
      <section className="py-20 bg-gradient-to-br from-orange-500 via-pink-500 to-yellow-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About TEKGUYZ
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto mb-12">
              We're a team of passionate technologists based in sunny South Florida, dedicated to helping businesses 
              leverage the full power of modern technology and DevOps practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mt-16"
          >
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
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At TEKGUYZ, we believe that technology should be an enabler, not a barrier. 
                Our mission is to bridge the gap between complex technical solutions and 
                business objectives, making advanced technology accessible and actionable 
                for organizations of all sizes in South Florida and beyond.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                We're committed to delivering not just technical excellence, but strategic 
                value that drives measurable business outcomes and long-term growth under the sunshine.
              </p>
              
              <Button
                borderRadius="1.75rem"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white border-orange-300"
                containerClassName="w-auto"
              >
                Our Services
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Team working together"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our approach to technology consulting.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-orange-50 to-pink-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the South Florida experts who bring decades of combined experience to every project, 
              ensuring your technology initiatives succeed under the sunshine.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="aspect-w-1 aspect-h-1">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-orange-600 font-medium mb-3">{member.title}</p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                  
                  <div className="flex space-x-3">
                    <button className="w-8 h-8 bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 rounded-full flex items-center justify-center transition-colors">
                      <Linkedin className="h-4 w-4 text-orange-600" />
                    </button>
                    <button className="w-8 h-8 bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 rounded-full flex items-center justify-center transition-colors">
                      <Twitter className="h-4 w-4 text-orange-600" />
                    </button>
                    <button className="w-8 h-8 bg-gradient-to-r from-orange-100 to-pink-100 hover:from-orange-200 hover:to-pink-200 rounded-full flex items-center justify-center transition-colors">
                      <Github className="h-4 w-4 text-orange-600" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Ready to transform your technology landscape? Our South Florida team is here to help you succeed.
            </p>
            
            <Button
              borderRadius="1.75rem"
              className="bg-white text-orange-600 border-white hover:bg-gray-50"
              containerClassName="w-auto"
            >
              Get In Touch
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;