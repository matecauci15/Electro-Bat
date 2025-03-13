// import React from 'react';
// import { motion } from 'framer-motion';
// import { FaCar, FaTruck, FaMotorcycle } from 'react-icons/fa';
// import B12V40 from './imgs/B12V40.webp'
// import B12V45 from './imgs/B12V45.webp'
// import B12V70AH from './imgs/B12V70AH.webp'
// import B12V75AH from './imgs/B12V75AH.webp'
// import B12V85AH from './imgs/B12V85AH.webp'
// import B12V85AH2 from './imgs/B12V85AH2.webp'
// import B12V100AH from './imgs/B12V100AH.webp'
// import B12V100AH2 from './imgs/B12V100AH2.webp'
// import B12V100AH3 from './imgs/B12V100AH3.webp'
// import B12V110AH from './imgs/B12V110AH.webp'
// import B12V180AH from './imgs/B12V180AH.webp'


// interface BatteryType {
//     id: number;
//     name: string;
//     description: string;
//     features: string[];
//     price: string;
//     image: string;
//     vehicleType: 'car' | 'truck' | 'motorcycle';
//   }

// export const BatteriesSection: React.FC = () => {
//     const batteries: BatteryType[] = [
//       {
//         id: 1,
//         name: "12 V. 40 AH. Modelo NS 40",
//         description: "Para vehiculos modelo Honda Fit Y KIA",
//         features: ["Largo: 200mm", "Ancho: 130mm", "Alto: 225mm"],
//         price: "$380.000",
//         // image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V40,
//         vehicleType: "car"
//       },
//       {
//         id: 2,
//         name: "12 V. 45 AH. Modelo Ford K",
//         description: "",
//         features: ["Largo: 210mm", "Ancho: 175mm", "Alto: 178m"],
//         price: "$520.000",
//         // image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V45,
//         vehicleType: "car"
//       },
//       {
//         id: 3,
//         name: "12 V. 70 AH.",
//         description: "Libre de mantenimiento para autos Nafteros y GNC",
//         features: ["Largo: 240mm", "Ancho: 174mm", "Alto: 178mm"],
//         price: "$180.000",
//         // image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V70AH,
//         vehicleType: "car"
//       },
//       {
//         id: 4,
//         name: "12 V. 75 AH",
//         description: "Libre de mantenimiento para autos Diesel",
//         features: ["Largo: 277mm", "Ancho: 175mm", "Alto: 178mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V75AH,
//         vehicleType: "car"
//       },
//       {
//         id: 5,
//         name: "12 V. 85 AH. Modelo Ranger",
//         description: "Para modelos Ranger",
//         features: ["Largo: 280mm", "Ancho: 175mm", "Alto: 190mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V85AH,
//         vehicleType: "car"
//       },
//       {
//         id: 6,
//         name: "12 V. 85 AH. Modelo N70Z",
//         description: "Para vehiculos modelo trafic y Toyota Hilux",
//         features: ["Largo: 280mm", "Ancho: 173mm", "Alto: 210mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V85AH2,
//         vehicleType: "car"
//       },
//       {
//         id: 7,
//         name: "12 V. 100AH. Modelo Caterpillar",
//         description: "Libre de mantenimiento para camiones y tractores",
//         features: ["Largo: 327mm", "Ancho: 170mm", "Alto: 215mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V100AH,
//         vehicleType: "truck"
//       },
//       {
//         id: 8,
//         name: "12 V. 100 AH. Baja Modelo Sprinter",
//         description: "Libre de mantenimiento para camionetas Diesel",
//         features: ["Largo: 370mm", "Ancho: 176mm", "Alto: 194mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V100AH2,
//         vehicleType: "truck"
//       },
//       {
//         id: 9,
//         name: "12 V. 100 AH. Modelo N75Z",
//         description: "Para vehiculos modelo Toyota Hilux y KIA Sorento",
//         features: ["Largo: 300mm", "Ancho: 170mm", "Alto: 208mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V100AH3,
//         vehicleType: "car"
//       },
//       {
//         id: 10,
//         name: "12 V. 110 AH",
//         description: "Libre de mantenimiento para camiones y tractores",
//         features: ["Largo: 380mm", "Ancho: 179mm", "Alto: 226mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V110AH,
//         vehicleType: "truck"
//       },      
//       {
//         id: 11,
//         name: "12 V. 180 AH",
//         description: "Libre de mantenimiento para camiones y tractores de gran porte",
//         features: ["Largo: 508mm", "Ancho: 214mm", "Alto: 204mm",],
//         price: "$450.000",
//         // image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//         image: B12V180AH,
//         vehicleType: "truck"
//       },
//     ];
    
//     const [selectedVehicle, setSelectedVehicle] = React.useState<'all' | 'car' | 'truck' | 'motorcycle'>('all');
    
//     const filteredBatteries = selectedVehicle === 'all' 
//       ? batteries 
//       : batteries.filter(battery => battery.vehicleType === selectedVehicle);
    
//     return (
//       <section id="batteries" className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
//               Nuestras Baterías
//             </h2>
//             <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
//             <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
//               Energía confiable para todo tipo de vehículos y maquinarias
//             </p>
//           </motion.div>
          
//           <div className="flex justify-center mb-8">
//             <div className="inline-flex rounded-md shadow-sm">
//               <button
//                 onClick={() => setSelectedVehicle('all')}
//                 className={`px-4 py-2 text-sm font-medium rounded-l-md ${
//                   selectedVehicle === 'all' 
//                     ? 'bg-yellow-400 text-gray-900' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 } border border-gray-300`}
//               >
//                 Todos
//               </button>
//               <button
//                 onClick={() => setSelectedVehicle('car')}
//                 className={`px-4 py-2 text-sm font-medium ${
//                   selectedVehicle === 'car' 
//                     ? 'bg-yellow-400 text-gray-900' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 } border-t border-b border-r border-gray-300`}
//               >
//                 <FaCar className="inline mr-1" /> Automóviles
//               </button>
//               <button
//                 onClick={() => setSelectedVehicle('truck')}
//                 className={`px-4 py-2 text-sm font-medium ${
//                   selectedVehicle === 'truck' 
//                     ? 'bg-yellow-400 text-gray-900' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 } border-t border-b border-r border-gray-300`}
//               >
//                 <FaTruck className="inline mr-1" /> Camiones
//               </button>
//               <button
//                 onClick={() => setSelectedVehicle('motorcycle')}
//                 className={`px-4 py-2 text-sm font-medium rounded-r-md ${
//                   selectedVehicle === 'motorcycle' 
//                     ? 'bg-yellow-400 text-gray-900' 
//                     : 'bg-white text-gray-700 hover:bg-gray-50'
//                 } border-t border-b border-r border-gray-300`}
//               >
//                 <FaMotorcycle className="inline mr-1" /> Motos
//               </button>
//             </div>
//           </div>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {filteredBatteries.map((battery, index) => (
//               <motion.div
//                 key={battery.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.1 }}
//                 viewport={{ once: true }}
//                 className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
//               >
//                 <div className="relative h-48">
//                   <img 
//                     src={battery.image} 
//                     alt={battery.name} 
//                     className="w-full h-full object-cover"
//                   />
//                   <div className="absolute top-2 right-2 rounded-full p-2 bg-yellow-400">
//                     {battery.vehicleType === 'car' && <FaCar className="text-gray-900" />}
//                     {battery.vehicleType === 'truck' && <FaTruck className="text-gray-900" />}
//                     {battery.vehicleType === 'motorcycle' && <FaMotorcycle className="text-gray-900" />}
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-lg font-bold text-gray-900 mb-2">{battery.name}</h3>
//                   <p className="text-gray-600 text-sm mb-4">{battery.description}</p>
//                   <ul className="mb-4">
//                     {battery.features.map((feature, i) => (
//                       <li key={i} className="text-gray-600 text-sm flex items-center mb-1">
//                         <svg className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                         </svg>
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>
//                   <div className="flex justify-between items-center">
//                     <span className="text-xl font-bold text-gray-900">{battery.price}</span>
//                     <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
//                       Ver Detalles
//                     </button>
//                   </div>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
          
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8 }}
//             viewport={{ once: true }}
//             className="mt-16 bg-gray-100 rounded-lg overflow-hidden shadow-lg"
//           >
//             <div className="grid grid-cols-1 md:grid-cols-2">
//               <div className="p-8 md:p-12">
//                 <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio de Diagnóstico</h3>
//                 <p className="text-gray-600 mb-6">
//                   ¿Problemas con tu batería? Ofrecemos diagnóstico profesional y recomendaciones para extender la vida útil de tu batería.
//                 </p>
//                 <ul className="mb-8">
//                   {[
//                     "Prueba de carga completa",
//                     "Análisis de capacidad de arranque",
//                     "Verificación del sistema de carga",
//                     "Inspección de terminales y cables"
//                   ].map((item, i) => (
//                     <li key={i} className="flex items-center mb-3">
//                       <svg className="h-5 w-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
//                         <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
//                       </svg>
//                       <span className="text-gray-700">{item}</span>
//                     </li>
//                   ))}
//                 </ul>
//                 <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors">
//                   Agendar Diagnóstico
//                 </button>
//               </div>
//               <div className="bg-gray-900 flex items-center justify-center p-8 md:p-0">
//                 <img 
//                   src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
//                   alt="Técnico realizando diagnóstico" 
//                   className="rounded-lg shadow-lg max-h-80 md:max-h-full"
//                 />
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </section>
//     );
//   };
  
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaTruck, FaMotorcycle } from 'react-icons/fa';
import B12V40 from './imgs/B12V40.webp';
import B12V45 from './imgs/B12V45.webp';
import B12V70AH from './imgs/B12V70AH.webp';
import B12V75AH from './imgs/B12V75AH.webp';
import B12V85AH from './imgs/B12V85AH.webp';
import B12V85AH2 from './imgs/B12V85AH2.webp';
import B12V100AH from './imgs/B12V100AH.webp';
import B12V100AH2 from './imgs/B12V100AH2.webp';
import B12V100AH3 from './imgs/B12V100AH3.webp';
import B12V110AH from './imgs/B12V110AH.webp';
import B12V180AH from './imgs/B12V180AH.webp';

// Company logos imports - you'll need to add these images to your project
import LogoTrojan from './imgs/trojan.jpg';
import LogoProbattery from './imgs/probattery.webp';
import LogoMoura from './imgs/moura.webp';
import LogoElectrobat from './imgs/electrobat.png';
import LogoYuasa from './imgs/yuasa.webp';
import LogoACDelco from './imgs/acdelco.png';

interface BatteryType {
  id: number;
  name: string;
  description: string;
  features: string[];
  // price: string;
  image: string;
  vehicleType: 'car' | 'truck' | 'motorcycle';
}

interface PartnerLogo {
  id: number;
  name: string;
  image: string;
  alt: string;
  width?: number;
  height?: number;
}

export const BatteriesSection: React.FC = () => {
  const partnerLogos: PartnerLogo[] = [
    {
      id: 1,
      name: "Trojan",
      image: LogoTrojan,
      alt: "Logo de Trojan Battery Company"
    },
    {
      id: 2,
      name: "Probattery",
      image: LogoProbattery,
      alt: "Logo de Probattery",
      width: 600,
      height: 1000
    },
    {
      id: 3,
      name: "Moura",
      image: LogoMoura,
      alt: "Logo de Moura Baterías"
    },
    {
      id: 4,
      name: "Electrobat",
      image: LogoElectrobat,
      alt: "Logo de Electrobat"
    },
    {
      id: 5,
      name: "Yuasa",
      image: LogoYuasa,
      alt: "Logo de Yuasa"
    },
    {
      id: 6,
      name: "ACDelco",
      image: LogoACDelco,
      alt: "Logo de ACDelco"
    }
  ];

  const batteries: BatteryType[] = [
    {
      id: 1,
      name: "12 V. 40 AH. Modelo NS 40",
      description: "Para vehículos modelo Honda Fit Y KIA",
      features: ["Largo: 200mm", "Ancho: 130mm", "Alto: 225mm"],
      // price: "$380.000",
      image: B12V40,
      vehicleType: "car"
    },
    {
      id: 2,
      name: "12 V. 45 AH. Modelo Ford K",
      description: "Para Ford K y vehículos similares",
      features: ["Largo: 210mm", "Ancho: 175mm", "Alto: 178mm"],
      // price: "$520.000",
      image: B12V45,
      vehicleType: "car"
    },
    {
      id: 3,
      name: "12 V. 70 AH.",
      description: "Libre de mantenimiento para autos Nafteros y GNC",
      features: ["Largo: 240mm", "Ancho: 174mm", "Alto: 178mm"],
      // price: "$180.000",
      image: B12V70AH,
      vehicleType: "car"
    },
    {
      id: 4,
      name: "12 V. 75 AH",
      description: "Libre de mantenimiento para autos Diesel",
      features: ["Largo: 277mm", "Ancho: 175mm", "Alto: 178mm"],
      // price: "$450.000",
      image: B12V75AH,
      vehicleType: "car"
    },
    {
      id: 5,
      name: "12 V. 85 AH. Modelo Ranger",
      description: "Para modelos Ranger",
      features: ["Largo: 280mm", "Ancho: 175mm", "Alto: 190mm"],
      // price: "$450.000",
      image: B12V85AH,
      vehicleType: "car"
    },
    {
      id: 6,
      name: "12 V. 85 AH. Modelo N70Z",
      description: "Para vehículos modelo Trafic y Toyota Hilux",
      features: ["Largo: 280mm", "Ancho: 173mm", "Alto: 210mm"],
      // price: "$450.000",
      image: B12V85AH2,
      vehicleType: "car"
    },
    {
      id: 7,
      name: "12 V. 100AH. Modelo Caterpillar",
      description: "Libre de mantenimiento para camiones y tractores",
      features: ["Largo: 327mm", "Ancho: 170mm", "Alto: 215mm"],
      // price: "$450.000",
      image: B12V100AH,
      vehicleType: "truck"
    },
    {
      id: 8,
      name: "12 V. 100 AH. Baja Modelo Sprinter",
      description: "Libre de mantenimiento para camionetas Diesel",
      features: ["Largo: 370mm", "Ancho: 176mm", "Alto: 194mm"],
      // price: "$450.000",
      image: B12V100AH2,
      vehicleType: "truck"
    },
    {
      id: 9,
      name: "12 V. 100 AH. Modelo N75Z",
      description: "Para vehículos modelo Toyota Hilux y KIA Sorento",
      features: ["Largo: 300mm", "Ancho: 170mm", "Alto: 208mm"],
      // price: "$450.000",
      image: B12V100AH3,
      vehicleType: "car"
    },
    {
      id: 10,
      name: "12 V. 110 AH",
      description: "Libre de mantenimiento para camiones y tractores",
      features: ["Largo: 380mm", "Ancho: 179mm", "Alto: 226mm"],
      // price: "$450.000",
      image: B12V110AH,
      vehicleType: "truck"
    },      
    {
      id: 11,
      name: "12 V. 180 AH",
      description: "Libre de mantenimiento para camiones y tractores de gran porte",
      features: ["Largo: 508mm", "Ancho: 214mm", "Alto: 204mm"],
      // price: "$450.000",
      image: B12V180AH,
      vehicleType: "truck"
    },
  ];
  
  const [selectedVehicle, setSelectedVehicle] = useState<'all' | 'car' | 'truck' | 'motorcycle'>('all');
  const [visibleItems, setVisibleItems] = useState<number>(4);
  
  const filteredBatteries = selectedVehicle === 'all' 
    ? batteries 
    : batteries.filter(battery => battery.vehicleType === selectedVehicle);
  
  const displayedBatteries = filteredBatteries.slice(0, visibleItems);
  
  const loadMore = () => {
    setVisibleItems(prev => prev + 4);
  };
  
  // Reset visible items when filter changes
  React.useEffect(() => {
    setVisibleItems(4);
  }, [selectedVehicle]);
  
  const hasMoreItems = visibleItems < filteredBatteries.length;
  
  return (
    <section id="batteries" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Nuestras Baterías
          </h2>
          <div className="h-1 w-20 bg-yellow-500 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600">
            Energía confiable para todo tipo de vehículos y maquinarias
          </p>
        </motion.div>
        
        {/* Partners logos section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-gray-800 text-center mb-8">
            Trabajamos con las mejores marcas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {partnerLogos.map((logo) => (
              <motion.div 
                key={logo.id}
                whileHover={{ scale: 1.05 }}
                className="flex justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
              >
                <img 
                  src={logo.image} 
                  alt={logo.alt} 
                  className="h-12 object-contain"
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Filter buttons */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setSelectedVehicle('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md border transition-colors ${
                selectedVehicle === 'all' 
                  ? 'bg-yellow-500 text-white border-yellow-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedVehicle('car')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-colors ${
                selectedVehicle === 'car' 
                  ? 'bg-yellow-500 text-white border-yellow-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <FaCar className="inline mr-1" /> Automóviles
            </button>
            <button
              onClick={() => setSelectedVehicle('truck')}
              className={`px-4 py-2 text-sm font-medium border-t border-b border-r transition-colors ${
                selectedVehicle === 'truck' 
                  ? 'bg-yellow-500 text-white border-yellow-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <FaTruck className="inline mr-1" /> Camiones
            </button>
            <button
              onClick={() => setSelectedVehicle('motorcycle')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md border-t border-b border-r transition-colors ${
                selectedVehicle === 'motorcycle' 
                  ? 'bg-yellow-500 text-white border-yellow-500' 
                  : 'bg-white text-gray-700 hover:bg-gray-50 border-gray-300'
              }`}
            >
              <FaMotorcycle className="inline mr-1" /> Motos
            </button>
          </div>
        </div>
        
        {/* Battery cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayedBatteries.map((battery, index) => (
            <motion.div
              key={battery.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                transition: { duration: 0.2 } 
              }}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-100 flex flex-col h-full"
            >
              <div className="relative h-52">
                <img 
                  src={battery.image} 
                  alt={battery.name} 
                  className="w-full h-full object-contain p-4"
                />
                <div className="absolute top-3 right-3 rounded-full p-2 bg-yellow-500 shadow-md">
                  {battery.vehicleType === 'car' && <FaCar className="text-white text-lg" />}
                  {battery.vehicleType === 'truck' && <FaTruck className="text-white text-lg" />}
                  {battery.vehicleType === 'motorcycle' && <FaMotorcycle className="text-white text-lg" />}
                </div>
              </div>
              <div className="p-6 border-t border-gray-100 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{battery.name}</h3>
                <p className="text-gray-600 text-sm mb-4 h-10">{battery.description || "Batería de alta calidad"}</p>
                
                {/* Fixed height container for features */}
                <div className="flex-grow">
                  <ul className="space-y-2">
                    {battery.features.map((feature, i) => (
                      <li key={i} className="text-gray-600 text-sm flex items-center">
                        <svg className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                {/* Price and button section with fixed position at bottom */}
                <div className="pt-4 border-t border-gray-100 mt-4 flex justify-center">
  <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-yellow-500 transition-colors"
  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0")  }
>
    Solicitar precio
  </button>
</div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Load more button */}
        {hasMoreItems && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={loadMore}
              className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-md flex items-center"
            >
              Ver Más
              <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
          </motion.div>
        )}
        
        {/* No results message */}
        {filteredBatteries.length === 0 && (
          <div className="text-center py-10">
            <p className="text-gray-500 text-lg">No se encontraron baterías para esta categoría.</p>
          </div>
        )}
        
        {/* Diagnostic service */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 bg-white rounded-lg overflow-hidden shadow-xl border border-gray-100"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio de Diagnóstico</h3>
              <div className="h-1 w-16 bg-yellow-500 mb-6"></div>
              <p className="text-gray-600 mb-6">
                ¿Problemas con tu batería? Ofrecemos diagnóstico profesional y recomendaciones para extender la vida útil de tu batería.
              </p>
              <ul className="mb-8 space-y-3">
                {[
                  "Prueba de carga completa",
                  "Análisis de capacidad de arranque",
                  "Verificación del sistema de carga",
                  "Inspección de terminales y cables"
                ].map((item, i) => (
                  <li key={i} className="flex items-center">
                    <svg className="h-5 w-5 text-yellow-500 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button 
  className="px-6 py-3 bg-yellow-500 text-white font-medium rounded-md hover:bg-yellow-600 transition-colors shadow-md"
  onClick={() => window.open("https://api.whatsapp.com/send/?phone=5493416868049&text=Hola%21+Queria+consultar+por+el+alquiler+de+volquetes&type=phone_number&app_absent=0", "_blank")}
>
  Agendar Diagnóstico
</button>

            </div>
            <div className="bg-gray-900 flex items-center justify-center p-8 md:p-0">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Técnico realizando diagnóstico" 
                className="rounded-lg shadow-lg max-h-80 md:max-h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};