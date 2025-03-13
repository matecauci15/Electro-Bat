// import React from 'react';
// import { motion } from 'framer-motion';
// import empresa  from './imgs/electrobat.webp'


// export const AboutSection: React.FC = () => {
//     return (
//       <section id="about" className="py-20 bg-gray-100">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Nosotros
//             </h2>
//             <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
//           </motion.div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">20 Años de Experiencia</h3>
//               <p className="text-gray-600 mb-6">
//                 Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterias con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
//               </p>
//               <p className="text-gray-600 mb-6">
//                 La empresa está integrada por personas con trayectoria, idoneidad y experiencia, sumada a una permanente capacitación que afianza sus niveles de liderazgo y competitividad.
//               </p>
//               <div className="flex flex-wrap gap-4">
//                 <div className="flex items-center">
//                   <span className="bg-yellow-400 rounded-full p-2 mr-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </span>
//                   <span className="text-gray-700">Servicio 24/7</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="bg-yellow-400 rounded-full p-2 mr-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </span>
//                   <span className="text-gray-700">Garantía Extendida</span>
//                 </div>
//                 <div className="flex items-center">
//                   <span className="bg-yellow-400 rounded-full p-2 mr-3">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
//                     </svg>
//                   </span>
//                   <span className="text-gray-700">Asesoría Especializada</span>
//                 </div>
//               </div>
//             </motion.div>
            
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
//             >
//               {/* <img
//                 src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
//                 alt="Equipo de trabajo"
//                 className="w-full h-full object-cover"
//               /> */}
//               <img src={empresa} 
//               alt="Equipo de trabajo" 
//               className='w-full h-full'
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
//               <div className="absolute bottom-0 left-0 p-6">
//                 <div className="bg-yellow-400 inline-block px-4 py-2 rounded-lg text-gray-900 font-bold mb-2">
//                   Equipo PowerDump
//                 </div>
//                 <p className="text-white text-lg">
//                   Profesionales con pasión por la excelencia
//                 </p>
//               </div>
//             </motion.div>
//           </div>
          
//           <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             {[
//               { number: '500+', text: 'Clientes Satisfechos', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
//               { number: '20', text: 'Años de Experiencia', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
//               { number: '1000+', text: 'Proyectos Entregados', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
//               { number: '24/7', text: 'Soporte Técnico', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
//               >
//                 <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
//                   <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
//                   </svg>
//                 </div>
//                 <h3 className="text-2xl font-bold text-gray-900">{item.number}</h3>
//                 <p className="text-gray-600 mt-1">{item.text}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     );
//   };

import React from 'react';
import { motion } from 'framer-motion';
import empresa from './imgs/electrobat.webp';
import { FaTools, FaAward, FaUsers, FaChartLine } from 'react-icons/fa';

// interface TimelineEvent {
//   year: string;
//   title: string;
//   description: string;
// }

export const AboutSection: React.FC = () => {
  // const timelineEvents: TimelineEvent[] = [
  //   { year: '2003', title: 'Fundación', description: 'Comenzamos como un pequeño negocio local de baterías' },
  //   { year: '2008', title: 'Expansión', description: 'Incorporamos el servicio de alquiler de volquetes' },
  //   { year: '2013', title: 'Certificación', description: 'Obtuvimos certificación ISO 9001 en gestión de calidad' },
  //   { year: '2023', title: 'Actualidad', description: '20 años liderando el mercado con soluciones innovadoras' }
  // ];

  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nosotros
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">20 Años de Experiencia</h3>
            <p className="text-gray-600 mb-6">
              Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterías con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
            </p>
            <p className="text-gray-600 mb-6">
              La empresa está integrada por personas con trayectoria, idoneidad y experiencia, sumada a una permanente capacitación que afianza sus niveles de liderazgo y competitividad.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Servicio 24/7</span>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Garantía Extendida</span>
              </div>
              <div className="flex items-center">
                <span className="bg-yellow-400 rounded-full p-2 mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-gray-700">Asesoría Especializada</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl group"
          >
            <img 
              src={empresa} 
              alt="Equipo de trabajo" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-yellow-400 inline-block px-4 py-2 rounded-lg text-gray-900 font-bold mb-2">
                ElectroBat
              </div>
              <p className="text-white text-lg">
                Profesionales con pasión por la excelencia
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Company Timeline */}
        {/* <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Nuestra Historia</h3>
          <div className="relative">

            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-yellow-400"></div>
            

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}
                >
                  <div className="flex-1"></div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-yellow-400 z-10 flex items-center justify-center">
                    <span className="font-bold text-sm">{event.year}</span>
                  </div>
                  <div className="flex-1">
                    <div className={`bg-white p-6 rounded-lg shadow-md ${index % 2 === 0 ? 'mr-6' : 'ml-6'}`}>
                      <h4 className="font-bold text-lg text-gray-900">{event.title}</h4>
                      <p className="text-gray-600">{event.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div> */}
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaUsers className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">500+</h3>
            <p className="text-gray-600 mt-1">Clientes Satisfechos</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaAward className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">20</h3>
            <p className="text-gray-600 mt-1">Años de Experiencia</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaChartLine className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">1000+</h3>
            <p className="text-gray-600 mt-1">Proyectos Entregados</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
          >
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
              <FaTools className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">24/7</h3>
            <p className="text-gray-600 mt-1">Soporte Técnico</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};