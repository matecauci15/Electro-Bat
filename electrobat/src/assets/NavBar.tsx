// import React from "react";
// import { BsLightningChargeFill } from 'react-icons/bs';


// export const Navbar: React.FC = () => {
//   const [isOpen, setIsOpen] = React.useState(false);
  
//   return (
//     <nav className="bg-gray-900 text-white fixed w-full z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           <div className="flex items-center">
//             <div className="flex-shrink-0 flex items-center">
//               <BsLightningChargeFill className="h-8 w-8 text-yellow-400 mr-2" />
//               <span className="font-bold text-xl">PowerDump</span>
//             </div>
//             <div className="hidden md:block">
//               <div className="ml-10 flex items-baseline space-x-4">
//                 {['Inicio', 'Nosotros', 'Baterías', 'Volquetes', 'Contacto'].map((item, index) => (
//                   <a 
//                     key={index} 
//                     href={`#${index === 0 ? 'home' : index === 1 ? 'about' : index === 2 ? 'batteries' : index === 3 ? 'trucks' : 'contact'}`}
//                     className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white transition-colors"
//                   >
//                     {item}
//                   </a>
//                 ))}
//               </div>
//             </div>
//           </div>
//           <div className="-mr-2 flex md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
//             >
//               <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//               </svg>
//               <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
//               </svg>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`}>
//         <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//           {['Inicio', 'Nosotros', 'Baterías', 'Volquetes', 'Contacto'].map((item, index) => (
//             <a 
//               key={index} 
//               href={`#${index === 0 ? 'home' : index === 1 ? 'about' : index === 2 ? 'batteries' : index === 3 ? 'trucks' : 'contact'}`}
//               className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-700 transition-colors"
//               onClick={() => setIsOpen(false)}
//             >
//               {item}
//             </a>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// };
import React, { useState, useEffect } from "react";
// import { BsLightningChargeFill } from "react-icons/bs";
import ElectroBat from "./imgs/electrobat.png";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const sections = React.useMemo(() => [
    { id: "features", label: "Inicio" },
    { id: "about", label: "Nosotros" },
    { id: "trucks", label: "Volquetes" },
    { id: "batteries", label: "Baterías" },
    { id: "contacto", label: "Contacto" },
  ], []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Ajuste para detección precisa

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);

            // Actualizar la URL sin recargar la página
            window.history.pushState(null, "", `#${section.id}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [sections]);

  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({ top: element.offsetTop - 64, behavior: "smooth" });
      setIsOpen(false);
      setActiveSection(id);

      // Actualizar la URL al hacer clic
      window.history.pushState(null, "", `#${id}`);
    }
  };

  // New function to scroll to the banner when logo is clicked
  const scrollToBanner = () => {
    // Assuming "features" is your banner section ID
    const bannerElement = document.getElementById("features");
    if (bannerElement) {
      window.scrollTo({
        top: bannerElement.offsetTop - 64,
        behavior: "smooth"
      });
      setActiveSection("features");
      window.history.pushState(null, "", "#features");
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-gray-900 text-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - Now clickable */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={scrollToBanner}
          >
            <img src={ElectroBat} alt="ElectroBat" className="h-15" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => handleClick(section.id)}
                className={`px-4 py-2 rounded-md transition-all duration-300 ${
                  activeSection === section.id ? "bg-yellow-500 text-gray-900" : "hover:bg-gray-700"
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 p-4">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className={`block w-full text-left px-4 py-2 rounded-md transition-all duration-300 ${
                activeSection === section.id ? "bg-yellow-500 text-gray-900" : "hover:bg-gray-700"
              }`}
            >
              {section.label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};