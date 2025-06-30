import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Sun, Palmtree } from 'lucide-react';
import { Button } from './ui/moving-border';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-400 via-pink-500 to-yellow-400 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNGRkZGRkYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJtMzYgMzQgLTIgMiAtMiAtMiAyIC0yIDIgMnoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-20"></div>
        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-40 right-20 w-12 h-12 bg-yellow-300/30 rounded-full backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, -15, 0], x: [0, 10, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-pink-300/20 rounded-full backdrop-blur-sm"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center space-x-4 mb-8"
          >
            <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div className="p-3 bg-yellow-300/30 rounded-full backdrop-blur-sm">
              <Sun className="h-8 w-8 text-white" />
            </div>
            <div className="p-3 bg-green-400/30 rounded-full backdrop-blur-sm">
              <Palmtree className="h-8 w-8 text-white" />
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Transform Your
            <span className="bg-gradient-to-r from-yellow-200 via-orange-200 to-pink-200 bg-clip-text text-transparent">
              {" "}Digital Future
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Your South Florida tech partner, delivering cutting-edge DevOps solutions, 
            custom software development, and expert consulting to accelerate your business growth under the sunshine.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <Button
              borderRadius="1.75rem"
              className="bg-white/90 backdrop-blur-md text-orange-600 border-white/20 hover:bg-white transition-all duration-300"
              containerClassName="w-auto"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>

            <Button
              borderRadius="1.75rem"
              className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20 transition-all duration-300"
              containerClassName="w-auto"
            >
              View Our Services
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            {[
              { number: "500+", label: "Projects Delivered" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/80 text-sm uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;