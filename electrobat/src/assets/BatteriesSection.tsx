import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaTruck, FaMotorcycle } from 'react-icons/fa';


interface BatteryType {
    id: number;
    name: string;
    description: string;
    features: string[];
    price: string;
    image: string;
    vehicleType: 'car' | 'truck' | 'motorcycle';
  }

export const BatteriesSection: React.FC = () => {
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
  