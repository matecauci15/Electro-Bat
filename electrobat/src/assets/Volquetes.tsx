// import React from "react";
// import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import {Pagination} from "swiper/modules";
// import { Autoplay } from 'swiper/modules';
// import volquete2 from "../assets/imgs/volqueteycamion.webp";
// import volquete1 from "../assets/imgs/volquete.webp";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

// interface TruckType {
//   id: number;
//   model: string;
//   capacity: string;
//   power: string;
//   features: string[];
//   image: string;
//   // price: string;
// }



// export const TrucksSection: React.FC = () => {
//     const trucks: TruckType[] = [
//       {
//         id: 1,
//         model: "TitanForce XL8500",
//         capacity: "25 toneladas",
//         power: "480 HP",
//         features: ["Sistema de suspensión avanzado", "Cabina climatizada", "GPS integrado", "Sistema de frenos antibloqueo"],
//         image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         // price: "$125.000.000"
//       },
//       {
//         id: 2,
//         model: "ConstructMaster V12",
//         capacity: "20 toneladas",
//         power: "425 HP",
//         features: ["Bajo consumo de combustible", "Sistema de telemetría", "Caja automática de 8 velocidades", "Neumáticos todo terreno"],
//         image: "https://images.unsplash.com/photo-1569307371725-1d232d0f8c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         // price: "$110.000.000"
//       },
//       {
//         id: 3,
//         model: "MegaDump Pro",
//         capacity: "30 toneladas",
//         power: "520 HP",
//         features: ["Caja reforzada", "Sistema de pesaje incorporado", "Cámara 360°", "Asistente de pendientes"],
//         image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         // price: "$142.000.000"
//       }
//     ];
    
//     return (
//       <section id="trucks" className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Volquetes de Alta Capacidad
//             </h2>
//             <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
//             <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//               Maquinaria pesada para tus proyectos más exigentes
//             </p>
//           </motion.div>
          
//           <Swiper
//             modules={[Pagination, Autoplay]}
//             spaceBetween={30}
//             slidesPerView={1}
//             pagination={{ clickable: true }}
//             autoplay={{ delay: 5000 }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//               },
//               768: {
//                 slidesPerView: 2,
//               },
//               1024: {
//                 slidesPerView: 3,
//               },
//             }}
//             className="mb-12"
//           >
//             {trucks.map((truck) => (
//               <SwiperSlide key={truck.id}>
//                 <motion.div
//                   initial={{ opacity: 0, scale: 0.9 }}
//                   whileInView={{ opacity: 1, scale: 1 }}
//                   transition={{ duration: 0.5 }}
//                   viewport={{ once: true }}
//                   className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
//                 >
//                   <div className="relative h-56">
//                     <img 
//                       src={truck.image} 
//                       alt={truck.model} 
//                       className="w-full h-full object-cover"
//                     />
//                     <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-2 font-bold">
//                       {truck.capacity}
//                     </div>
//                   </div>
//                   <div className="p-6 flex-grow">
//                     <h3 className="text-xl font-bold text-gray-900 mb-2">{truck.model}</h3>
//                     <div className="flex items-center mb-4">
//                       <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
//                         {truck.power}
//                       </span>
//                       <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
//                         {truck.capacity}
//                       </span>
//                     </div>
//                     <ul className="mb-4">
//                       {truck.features.map((feature, index) => (
//                         <li key={index} className="flex items-start mb-2">
//                           <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
//                             <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                           </svg>
//                           <span className="text-gray-600">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                   <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
//                     <div className="flex items-center justify-between">
//                       <span className="text-xl font-bold text-gray-900">{truck.price}</span>
//                       <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
//                         Más Detalles
//                       </button>
//                     </div>
//                   </div>
//                 </motion.div>
//               </SwiperSlide>
//             ))}
//           </Swiper>
  
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
//           >
//             <div className="grid grid-cols-1 lg:grid-cols-2">
//               <div className="p-8 lg:p-12 text-white">
//                 <h3 className="text-2xl font-bold mb-4">Servicio de Alquiler</h3>
//                 <p className="text-gray-300 mb-6">
//                   Ofrecemos servicio de alquiler de volquetes para proyectos de cualquier escala. Nuestras máquinas están en perfecto estado y cuentan con mantenimiento al día.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-white">Flexibilidad Horaria</h4>
//                       <p className="mt-1 text-gray-300">Adaptamos nuestros servicios a tu cronograma.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-white">Seguro Incluido</h4>
//                       <p className="mt-1 text-gray-300">Todas nuestras máquinas cuentan con seguros completos.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-white">Operadores Capacitados</h4>
//                       <p className="mt-1 text-gray-300">Contamos con personal certificado y con experiencia.</p>
//                     </div>
//                   </div>
//                   <div className="flex items-start">
//                     <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
//                       </svg>
//                     </div>
//                     <div className="ml-4">
//                       <h4 className="text-lg font-medium text-white">Tarifas Competitivas</h4>
//                       <p className="mt-1 text-gray-300">Precios ajustados al mercado con promociones por volumen.</p>
//                     </div>
//                   </div>
//                 </div>
//                 <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors">
//                   Solicitar Cotización
//                 </button>
//               </div>
//               <div className="hidden lg:block relative">
//                 <img 
//                   src={volquete1}
//                   alt="Volquete en operación" 
//                   className="absolute inset-0 h-full w-full object-cover"
//                 />
//               </div>
//             </div>
//           </motion.div>
          
//         </div>
//       </section>
//     );
//   };


import React from "react";
import { motion } from "framer-motion";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Pagination, Autoplay } from "swiper/modules";
import volquete2 from "../assets/imgs/volqueteycamion.webp";
import volquete1 from "../assets/imgs/volquete.webp";
// import 'swiper/css';
// import 'swiper/css/pagination';
// import 'swiper/css/autoplay';

export const VolquetesSection: React.FC = () => {
  // Updated truck data with more accurate terminology
  const equipmentTypes = [
    {
      id: 1,
      title: "Volquetes grandes",
      description: "Volquetes de carga para camiones de alta capacidad",
      image: volquete1,
      tags: ["Alta capacidad"]
    },
    {
      id: 2,
      title: "Volquetes medianos",
      description: "Volquetes versátiles para diversos tipos de carga",
      image: volquete2,
      tags: ["Versatilidad"]
    }
  ];

  return (
    <section id="trucks" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestros Volquetes
          </h2>
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Volqueres de carga para proyectos de construcción y transporte de cualquier escala
          </p>
        </motion.div>

        {/* Featured equipment showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {equipmentTypes.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg shadow-lg group"
            >
              <div className="aspect-w-16 aspect-h-9 lg:aspect-h-7">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-200 mb-3">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, index) => (
                    <span key={index} className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
        >
          <div className="p-8 lg:p-12 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Servicio de Alquiler Disponible</h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Ofrecemos volquetes de alta capacidad para sus necesidades de transporte y carga. 
              Nuestros volquetes están en perfecto estado y disponibles para alquiler inmediato.
            </p>
            <a
  href="https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors inline-block"
>
  Solicitar Información
</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};