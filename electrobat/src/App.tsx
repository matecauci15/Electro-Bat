// import React from 'react';
import { Navbar } from './assets/NavBar'; 
import { AboutSection } from './assets/AboutSection'; 
import './index.css'; 
import { Banner } from './assets/Banner'; 
import { ContactSection } from './assets/ContactSection'; 
import { VolquetesSection } from './assets/Volquetes'; 
import { BatteriesSection } from './assets/BatteriesSection'; 
import { TestimonialsSection } from './assets/TestimonialsSection'; 
import { FeaturesSection } from './assets/FeaturesSection'; 
import { Footer } from './assets/Footer';  

function App() {   
  return (     
    <div className="app">
      <Navbar />
      
      <main>
        <section id="features">
          <Banner />
          <FeaturesSection />
        </section>
        
        <section id="about">
          <AboutSection />
        </section>
        
        <section id="trucks">
          <VolquetesSection />
        </section>
        
        <section id="batteries">
          <BatteriesSection />
        </section>
        
        <section id="testimonials">
          <TestimonialsSection />
        </section>
        
        <section id="contacto">
          <ContactSection />
        </section>
      </main>
      
      <Footer />
    </div>
  ); 
}

export default App;