import React from "react";
import { motion } from "framer-motion";
import { FaBatteryFull, FaTruck } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


export const Banner: React.FC = () => {
    return (
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-gray-900 opacity-80"></div>
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            muted 
            loop 
            playsInline
          >
            <source src="https://assets.mixkit.co/videos/preview/mixkit-big-yellow-excavator-working-on-a-construction-site-13216-large.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">
              <TypeAnimation
                sequence={[
                  'Potencia para tu Maquinaria', 2000,
                  'Baterías de Alta Calidad', 2000,
                  'Volquetes de Primera Línea', 2000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              20 años de experiencia brindando soluciones energéticas y equipamiento pesado.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="#batteries" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-yellow-400 hover:bg-yellow-500 transition-colors"
              >
                <FaBatteryFull className="mr-2" /> Ver Baterías
              </a>
              <a 
                href="#trucks" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                <FaTruck className="mr-2" /> Ver Volquetes
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    );
  };
