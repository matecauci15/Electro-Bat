// App.tsx - Main Component
import React from 'react';
import { motion } from 'framer-motion';
import { FaBatteryFull, FaTruck, FaMotorcycle, FaCar, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { BsLightningChargeFill } from 'react-icons/bs';
import { TypeAnimation } from 'react-type-animation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// Types
interface BatteryType {
  id: number;
  name: string;
  description: string;
  features: string[];
  price: string;
  image: string;
  vehicleType: 'car' | 'truck' | 'motorcycle';
}

interface TruckType {
  id: number;
  model: string;
  capacity: string;
  power: string;
  features: string[];
  image: string;
  price: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <nav className="bg-gray-900 text-white fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <BsLightningChargeFill className="h-8 w-8 text-yellow-400 mr-2" />
              <span className="font-bold text-xl">PowerDump</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {['Inicio', 'Nosotros', 'Baterías', 'Volquetes', 'Contacto'].map((item, index) => (
                  <a 
                    key={index} 
                    href={`#${index === 0 ? 'home' : index === 1 ? 'about' : index === 2 ? 'batteries' : index === 3 ? 'trucks' : 'contact'}`}
                    className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {['Inicio', 'Nosotros', 'Baterías', 'Volquetes', 'Contacto'].map((item, index) => (
            <a 
              key={index} 
              href={`#${index === 0 ? 'home' : index === 1 ? 'about' : index === 2 ? 'batteries' : index === 3 ? 'trucks' : 'contact'}`}
              className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Banner: React.FC = () => {
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

const AboutSection: React.FC = () => {
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
              Somos una empresa dedicada al abastecimiento, prestación de servicios y ventas de baterias con 20 años de trayectoria en el rubro. Apuntamos a dar respuestas, de acuerdo a las necesidades para cada exigencia concreta, colocando recursos frente a cada requerimiento.
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
            className="relative h-80 md:h-96 rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Equipo de trabajo"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-70"></div>
            <div className="absolute bottom-0 left-0 p-6">
              <div className="bg-yellow-400 inline-block px-4 py-2 rounded-lg text-gray-900 font-bold mb-2">
                Equipo PowerDump
              </div>
              <p className="text-white text-lg">
                Profesionales con pasión por la excelencia
              </p>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: '500+', text: 'Clientes Satisfechos', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
            { number: '20', text: 'Años de Experiencia', icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
            { number: '1000+', text: 'Proyectos Entregados', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
            { number: '24/7', text: 'Soporte Técnico', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-yellow-100 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900">{item.number}</h3>
              <p className="text-gray-600 mt-1">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BatteriesSection: React.FC = () => {
  const batteries: BatteryType[] = [
    {
      id: 1,
      name: "PowerMax Platinum",
      description: "Batería de alta capacidad diseñada para vehículos de uso intensivo. Ofrece arranque confiable en condiciones extremas.",
      features: ["1000 CCA", "Tecnología AGM", "Libre de mantenimiento", "Vida útil extendida"],
      price: "$380.000",
      image: "https://images.unsplash.com/photo-1620714223084-8fcacc6dfd8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      vehicleType: "car"
    },
    {
      id: 2,
      name: "TruckForce Ultra",
      description: "Especial para camiones y maquinaria pesada. Diseñada para soportar vibraciones y condiciones difíciles.",
      features: ["1500 CCA", "Resistente a vibraciones", "Tecnología de arranque en frío", "Garantía extendida"],
      price: "$520.000",
      image: "https://images.unsplash.com/photo-1568844293986-8d0400bd4745?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      vehicleType: "truck"
    },
    {
      id: 3,
      name: "MotoEnergy Pro",
      description: "Batería compacta de alto rendimiento para motocicletas. Ligera pero potente.",
      features: ["250 CCA", "Ultraligera", "Alta densidad energética", "Resistente a impactos"],
      price: "$180.000",
      image: "https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      vehicleType: "motorcycle"
    },
    {
      id: 4,
      name: "EcoVolt Green",
      description: "Batería ecológica con materiales reciclables. El mejor rendimiento con menor impacto ambiental.",
      features: ["850 CCA", "95% reciclable", "Larga vida útil", "Bajo impacto ambiental"],
      price: "$450.000",
      image: "https://images.unsplash.com/photo-1593941707882-a5bba53774c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      vehicleType: "car"
    }
  ];
  
  const [selectedVehicle, setSelectedVehicle] = React.useState<'all' | 'car' | 'truck' | 'motorcycle'>('all');
  
  const filteredBatteries = selectedVehicle === 'all' 
    ? batteries 
    : batteries.filter(battery => battery.vehicleType === selectedVehicle);
  
  return (
    <section id="batteries" className="py-20 bg-white">
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
          <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Energía confiable para todo tipo de vehículos y maquinarias
          </p>
        </motion.div>
        
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-md shadow-sm">
            <button
              onClick={() => setSelectedVehicle('all')}
              className={`px-4 py-2 text-sm font-medium rounded-l-md ${
                selectedVehicle === 'all' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border border-gray-300`}
            >
              Todos
            </button>
            <button
              onClick={() => setSelectedVehicle('car')}
              className={`px-4 py-2 text-sm font-medium ${
                selectedVehicle === 'car' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
            >
              <FaCar className="inline mr-1" /> Automóviles
            </button>
            <button
              onClick={() => setSelectedVehicle('truck')}
              className={`px-4 py-2 text-sm font-medium ${
                selectedVehicle === 'truck' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
            >
              <FaTruck className="inline mr-1" /> Camiones
            </button>
            <button
              onClick={() => setSelectedVehicle('motorcycle')}
              className={`px-4 py-2 text-sm font-medium rounded-r-md ${
                selectedVehicle === 'motorcycle' 
                  ? 'bg-yellow-400 text-gray-900' 
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } border-t border-b border-r border-gray-300`}
            >
              <FaMotorcycle className="inline mr-1" /> Motos
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBatteries.map((battery, index) => (
            <motion.div
              key={battery.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img 
                  src={battery.image} 
                  alt={battery.name} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 rounded-full p-2 bg-yellow-400">
                  {battery.vehicleType === 'car' && <FaCar className="text-gray-900" />}
                  {battery.vehicleType === 'truck' && <FaTruck className="text-gray-900" />}
                  {battery.vehicleType === 'motorcycle' && <FaMotorcycle className="text-gray-900" />}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{battery.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{battery.description}</p>
                <ul className="mb-4">
                  {battery.features.map((feature, i) => (
                    <li key={i} className="text-gray-600 text-sm flex items-center mb-1">
                      <svg className="h-4 w-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="flex justify-between items-center">
                  <span className="text-xl font-bold text-gray-900">{battery.price}</span>
                  <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                    Ver Detalles
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-100 rounded-lg overflow-hidden shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Servicio de Diagnóstico</h3>
              <p className="text-gray-600 mb-6">
                ¿Problemas con tu batería? Ofrecemos diagnóstico profesional y recomendaciones para extender la vida útil de tu batería.
              </p>
              <ul className="mb-8">
                {[
                  "Prueba de carga completa",
                  "Análisis de capacidad de arranque",
                  "Verificación del sistema de carga",
                  "Inspección de terminales y cables"
                ].map((item, i) => (
                  <li key={i} className="flex items-center mb-3">
                    <svg className="h-5 w-5 text-yellow-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors">
                Agendar Diagnóstico
              </button>
            </div>
            <div className="bg-gray-900 flex items-center justify-center p-8 md:p-0">
              <img 
                src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Técnico realizando diagnóstico" 
                className="rounded-lg shadow-lg max-h-80 md:max-h-full"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const TrucksSection: React.FC = () => {
    const trucks: TruckType[] = [
      {
        id: 1,
        model: "TitanForce XL8500",
        capacity: "25 toneladas",
        power: "480 HP",
        features: ["Sistema de suspensión avanzado", "Cabina climatizada", "GPS integrado", "Sistema de frenos antibloqueo"],
        image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$125.000.000"
      },
      {
        id: 2,
        model: "ConstructMaster V12",
        capacity: "20 toneladas",
        power: "425 HP",
        features: ["Bajo consumo de combustible", "Sistema de telemetría", "Caja automática de 8 velocidades", "Neumáticos todo terreno"],
        image: "https://images.unsplash.com/photo-1569307371725-1d232d0f8c3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$110.000.000"
      },
      {
        id: 3,
        model: "MegaDump Pro",
        capacity: "30 toneladas",
        power: "520 HP",
        features: ["Caja reforzada", "Sistema de pesaje incorporado", "Cámara 360°", "Asistente de pendientes"],
        image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
        price: "$142.000.000"
      }
    ];
    
    return (
      <section id="trucks" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Volquetes de Alta Capacidad
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Maquinaria pesada para tus proyectos más exigentes
            </p>
          </motion.div>
          
          <Swiper
            modules={[Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mb-12"
          >
            {trucks.map((truck) => (
              <SwiperSlide key={truck.id}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-lg overflow-hidden shadow-lg h-full flex flex-col"
                >
                  <div className="relative h-56">
                    <img 
                      src={truck.image} 
                      alt={truck.model} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-0 right-0 bg-yellow-400 text-gray-900 px-4 py-2 font-bold">
                      {truck.capacity}
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{truck.model}</h3>
                    <div className="flex items-center mb-4">
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                        {truck.power}
                      </span>
                      <span className="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                        {truck.capacity}
                      </span>
                    </div>
                    <ul className="mb-4">
                      {truck.features.map((feature, index) => (
                        <li key={index} className="flex items-start mb-2">
                          <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-gray-900">{truck.price}</span>
                      <button className="px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors">
                        Más Detalles
                      </button>
                    </div>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
  
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-900 rounded-lg overflow-hidden shadow-xl"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Servicio de Alquiler</h3>
                <p className="text-gray-300 mb-6">
                  Ofrecemos servicio de alquiler de volquetes para proyectos de cualquier escala. Nuestras máquinas están en perfecto estado y cuentan con mantenimiento al día.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Flexibilidad Horaria</h4>
                      <p className="mt-1 text-gray-300">Adaptamos nuestros servicios a tu cronograma.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Seguro Incluido</h4>
                      <p className="mt-1 text-gray-300">Todas nuestras máquinas cuentan con seguros completos.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Operadores Capacitados</h4>
                      <p className="mt-1 text-gray-300">Contamos con personal certificado y con experiencia.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-10 w-10 rounded-md bg-yellow-400 flex items-center justify-center text-gray-900">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-white">Tarifas Competitivas</h4>
                      <p className="mt-1 text-gray-300">Precios ajustados al mercado con promociones por volumen.</p>
                    </div>
                  </div>
                </div>
                <button className="px-6 py-3 bg-yellow-400 text-gray-900 font-medium rounded-md hover:bg-yellow-500 transition-colors">
                  Solicitar Cotización
                </button>
              </div>
              <div className="hidden lg:block relative">
                <img 
                  src="https://images.unsplash.com/photo-1505466607972-843afb4dc5ea?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="Volquete en operación" 
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </motion.div>
          
        </div>
      </section>
    );
  };


  const ContactSection: React.FC = () => {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Contáctanos
            </h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto mt-4"></div>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Estamos listos para atender tus necesidades
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-lg shadow-md p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Envíanos un mensaje</h3>
                <form>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Teléfono
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Asunto
                      </label>
                      <select
                        id="subject"
                        className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                      >
                        <option>Seleccionar</option>
                        <option>Consulta sobre baterías</option>
                        <option>Consulta sobre volquetes</option>
                        <option>Solicitud de cotización</option>
                        <option>Servicio técnico</option>
                        <option>Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500"
                    ></textarea>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="w-full bg-yellow-400 text-gray-900 font-medium py-3 px-4 rounded-md hover:bg-yellow-500 transition-colors"
                    >
                      Enviar Mensaje
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-900 rounded-lg shadow-md p-8 h-full flex flex-col">
                <h3 className="text-2xl font-bold text-white mb-6">Información de Contacto</h3>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Dirección</h4>
                    <p className="mt-1 text-gray-300">Av. Los Industriales 2500, Buenos Aires, Argentina</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <FaPhoneAlt className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Teléfono</h4>
                    <p className="mt-1 text-gray-300">+54 11 4567-8900</p>
                    <p className="mt-1 text-gray-300">+54 11 4567-8901</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-6">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Email</h4>
                    <p className="mt-1 text-gray-300">ventas@powerdump.com</p>
                    <p className="mt-1 text-gray-300">soporte@powerdump.com</p>
                  </div>
                </div>
                
                <div className="flex items-start mb-8">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-yellow-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-white">Horario de Atención</h4>
                    <p className="mt-1 text-gray-300">Lunes a Viernes: 8:00 - 18:00</p>
                    <p className="mt-1 text-gray-300">Sábados: 9:00 - 13:00</p>
                  </div>
                </div>
                
                <div className="mt-auto">
                  <div className="bg-gray-800 rounded-lg p-4">
                    <h4 className="text-lg font-medium text-white mb-2">Síguenos en redes sociales</h4>
                    <div className="flex space-x-4">
                      {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                        <a
                          key={social}
                          href={`#${social}`}
                          className="text-gray-400 hover:text-yellow-400 transition-colors"
                        >
                          <span className="sr-only">{social}</span>
                          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                            <path
                              fillRule="evenodd"
                              d={
                                social === 'facebook'
                                  ? 'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                                  : social === 'twitter'
                                  ? 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84'
                                  : social === 'instagram'
                                  ? 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                                  : 'M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'
                              }
                              clipRule="evenodd"
                            />
                          </svg>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
         </div>
        </section>
        );
        }     
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16"
          >
            <div className="bg-gray-100 rounded-lg overflow-hidden h-96">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0168878894506!2d-58.38375908519991!3d-34.603734465007136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x */}