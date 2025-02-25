// import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';
// import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className=" bg-gray-600 text-white py-12">
    <div className="container mx-auto px-4 max-w-screen-lg">
      <div className="grid md:grid-cols-3 gap-8 justify-items-center">
        <div className="text-center">
          <h3 className=" bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold mb-4">Contacto</h3>
          <div className="space-y-4 text-white">
            <div className="flex items-center justify-center gap-2">
              <Phone size={16} className="text-white" />
              <span>+54 (11) 1234-5678</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Mail size={16} className="text-white" />
              <span>info@gaucholab.com</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MapPin size={16} className="text-white" />
              <span>Rosario, Argentina</span>
            </div>
          </div>
        </div>
        <div className="">
        <h3 className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold mb-2">Gaucho Lab</h3>
        <div className='justify-center items-center flex flex-col'>
          <ul>
            {/* <Link to="/Gaucho-Lab/about"> */}
              <li className="mb-1 hover:text-[#e4baa4]">- Home</li>
            {/* </Link> */}
            {/* <Link to="/Gaucho-Lab/benefits"> */}
              <li className="mb-1 hover:text-[#e4baa4]">- Servicies</li>
            {/* </Link> */}
            {/* <Link to="/Gaucho-Lab/subsidios"> */}
              <li className="mb-1 hover:text-[#e4baa4]">- Projects</li>
            {/* </Link> */}
            {/* <Link to="/Gaucho-Lab/services"> */}
              <li className="mb-1 hover:text-[#e4baa4]">- About</li>
            {/* </Link> */}
            {/* <Link to="/Gaucho-Lab/contact"> */}
              <li className="mb-1 hover:text-[#e4baa4]">- Contact</li>
            {/* </Link> */}
          </ul>
        </div>
        </div>
        <div className="text-center items-center flex flex-col">
          {" "}
          {/* Centra el contenido y los íconos */}
          <h3 className="bg-gradient-to-r from-cyan-500 to-purple-600 bg-clip-text text-transparent text-xl font-bold mb-4">Síguenos</h3>
          <div className="flex justify-center space-x-4">
            {" "}
            {/* Centra las redes sociales */}
            <a
              href="https://www.facebook.com/amoseba.caba"
              className="text-white hover:text-[#EEA987]"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-[#EEA987]"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.instagram.com/amosebapresta/"
              className="text-white hover:text-[#EEA987]"
            >
              <Instagram size={20} />
            </a>
          </div>
            {/* <Link to="/Gaucho-Lab/#terminosycondiciones"> */}
              <p className="mt-10 hover:text-[#e4baa4]">- Terminos y condiciones</p>
            {/* </Link> */}
        </div>
      </div>
    </div>
  </footer>
);
  



// https://www.privacypolicies.com/live/eca0f115-3d12-46dc-99d5-8a858803ae3c