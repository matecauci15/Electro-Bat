import React, { JSX } from 'react';
import { motion } from 'framer-motion';
import { FaBatteryFull, FaTruckMoving, FaToolbox, FaRecycle, FaShieldAlt, FaHeadset } from 'react-icons/fa';

interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

export const FeaturesSection: React.FC = () => {
  const features: Feature[] = [
    {
      title: "Baterías de Alto Rendimiento",
      description: "Ofrecemos baterías para todo tipo de maquinaria pesada con garantía de durabilidad y rendimiento.",
      icon: <FaBatteryFull className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Volquetes para Proyectos",
      description: "Contamos con volquetes de diferentes capacidades para proyectos de construcción y movimiento de tierra.",
      icon: <FaTruckMoving className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Mantenimiento Preventivo",
      description: "Servicio de mantenimiento preventivo para maximizar la vida útil de sus baterías y equipos.",
      icon: <FaToolbox className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Reciclaje Responsable",
      description: "Nos encargamos del reciclaje adecuado de baterías usadas, cumpliendo con normas ambientales.",
      icon: <FaRecycle className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Garantía Extendida",
      description: "Todos nuestros productos cuentan con garantía extendida para su tranquilidad y seguridad.",
      icon: <FaShieldAlt className="h-8 w-8 text-yellow-500" />
    },
    {
      title: "Soporte Técnico 24/7",
      description: "Asistencia técnica disponible las 24 horas para atender cualquier emergencia que pueda surgir.",
      icon: <FaHeadset className="h-8 w-8 text-yellow-500" />
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Servicios
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Soluciones integrales para satisfacer todas sus necesidades
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="bg-yellow-100 inline-block p-3 rounded-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};