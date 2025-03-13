// import React from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

// export const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white pt-12 pb-6">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
//           <div>
//             <h3 className="text-xl font-bold mb-4">PowerDump</h3>
//             <p className="text-gray-400 mb-4">
//               20 años brindando soluciones en baterías industriales y alquiler de volquetes con la mejor calidad y servicio del mercado.
//             </p>
//             <div className="flex space-x-4">
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaFacebook size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaTwitter size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaInstagram size={20} />
//               </a>
//               <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                 <FaLinkedin size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
//             <ul className="space-y-2">
//               <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Inicio</a></li>
//               <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Nosotros</a></li>
//               <li><a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors">Servicios</a></li>
//               <li><a href="#batteries" className="text-gray-400 hover:text-yellow-400 transition-colors">Baterías</a></li>
//               <li><a href="#trucks" className="text-gray-400 hover:text-yellow-400 transition-colors">Volquetes</a></li>
//               <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors">Testimonios</a></li>
//               <li><a href="#contacto" className="text-gray-400 hover:text-yellow-400 transition-colors">Contacto</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Servicios</h3>
//             <ul className="space-y-2">
//               <li className="text-gray-400">Venta de Baterías Industriales</li>
//               <li className="text-gray-400">Alquiler de Volquetes</li>
//               <li className="text-gray-400">Mantenimiento Preventivo</li>
//               <li className="text-gray-400">Reciclaje de Baterías</li>
//               <li className="text-gray-400">Asesoría Técnica Especializada</li>
//               <li className="text-gray-400">Soporte 24/7</li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="text-xl font-bold mb-4">Contacto</h3>
//             <ul className="space-y-3">
//               <li className="flex items-start">
//                 <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3" />
//                 <span className="text-gray-400">Av. Industrial 1234, Zona Industrial, Buenos Aires, Argentina</span>
//               </li>
//               <li className="flex items-center">
//                 <FaPhone className="text-yellow-400 mr-3" />
//                 <span className="text-gray-400">+54 11 4567-8901</span>
//               </li>
//               <li className="flex items-center">
//                 <FaEnvelope className="text-yellow-400 mr-3" />
//                 <span className="text-gray-400">info@powerdump.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
//           <p>&copy; {new Date().getFullYear()} PowerDump. Todos los derechos reservados.</p>
//         </div>
//       </div>
//     </footer>
//   );
// };


import React from 'react';
import { FaFacebook, FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PowerDump</h3>
            <p className="text-gray-400 mb-4">
              20 años brindando soluciones en baterías industriales y alquiler de volquetes con la mejor calidad y servicio del mercado.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/electrobatrosarioo/" target='_blank'  className="text-gray-400 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a> */}
              <a href="https://www.instagram.com/electrobatrosario" target='_blank' className="text-gray-400 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <FaLinkedin size={20} />
              </a> */}
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-yellow-400 transition-colors">Inicio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-yellow-400 transition-colors">Nosotros</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-yellow-400 transition-colors">Servicios</a></li>
              <li><a href="#batteries" className="text-gray-400 hover:text-yellow-400 transition-colors">Baterías</a></li>
              <li><a href="#trucks" className="text-gray-400 hover:text-yellow-400 transition-colors">Volquetes</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-yellow-400 transition-colors">Testimonios</a></li>
              <li><a href="#contacto" className="text-gray-400 hover:text-yellow-400 transition-colors">Contacto</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Servicios</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Venta de Baterías Industriales</li>
              <li className="text-gray-400">Alquiler de Volquetes</li>
              <li className="text-gray-400">Mantenimiento Preventivo</li>
              <li className="text-gray-400">Reciclaje de Baterías</li>
              <li className="text-gray-400">Asesoría Técnica Especializada</li>
              <li className="text-gray-400">Soporte 24/7</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="text-yellow-400 mt-1 mr-3" />
                <span className="text-gray-400">Av. Industrial 1234, Zona Industrial, Buenos Aires, Argentina</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="text-yellow-400 mr-3" />
                <span className="text-gray-400">+54 11 4567-8901</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="text-yellow-400 mr-3" />
                <span className="text-gray-400">info@powerdump.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PowerDump. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};