import React from "react";
import { BsLightningChargeFill } from 'react-icons/bs';


export const Navbar: React.FC = () => {
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
