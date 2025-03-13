import React from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';

interface Testimonial {
  name: string;
  position: string;
  quote: string;
  image: string;
}

export const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      name: "Carlos Rodríguez",
      position: "Director de Operaciones, Constructora Andina",
      quote: "Llevamos trabajando con PowerDump más de 5 años y la calidad de sus baterías y servicios ha sido excepcional. Su equipo técnico siempre está disponible cuando los necesitamos.",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Marta Sánchez",
      position: "Gerente de Flota, Transportes del Sur",
      quote: "El servicio de mantenimiento preventivo que ofrecen ha reducido nuestros tiempos de inactividad significativamente. Recomiendo ampliamente sus servicios.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "Roberto Gómez",
      position: "Propietario, Excavaciones Gómez",
      quote: "Los volquetes que alquilamos siempre están en perfectas condiciones. La puntualidad en las entregas y la atención personalizada hacen que sigamos confiando en ellos.",
      image: "https://randomuser.me/api/portraits/men/62.jpg"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Lo que dicen nuestros clientes
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg relative"
            >
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full border-4 border-yellow-400 object-cover"
                />
              </div>
              <div className="pt-8 text-center">
                <FaQuoteLeft className="text-yellow-400 mx-auto mb-4 opacity-50" size={24} />
                <p className="text-gray-600 italic mb-4">"{testimonial.quote}"</p>
                <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};