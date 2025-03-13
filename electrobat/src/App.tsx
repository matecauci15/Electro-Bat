import { Navbar } from './assets/NavBar'; 
import { AboutSection } from './assets/AboutSection'; 
import './index.css'; 
import { Banner } from './assets/Banner'; 
import { ContactSection } from './assets/ContactSection'; 
import { TrucksSection } from './assets/TruckSection'; 
import { BatteriesSection } from './assets/BatteriesSection'; 
import { TestimonialsSection } from './assets/TestimonialsSection'; 
import { FeaturesSection } from './assets/FeaturesSection'; 
import { Footer } from './assets/Footer';  

function App() {   
  return (     
    <div>       
      <Navbar />       
      <Banner />       
      <main>         
        <section id="features">           
          <FeaturesSection />         
        </section>         
        <section id="about">           
          <AboutSection />         
        </section>         
        <section id="trucks">           
          <TrucksSection />         
        </section>         
        <section id="batteries">           
          <BatteriesSection />         
        </section>         
        <section id="contacto">           
          <ContactSection />         
        </section>       
        <section id="testimonials">           
          <TestimonialsSection />         
        </section>         
      </main>       
      <Footer />     
    </div>   
  ); 
};

export default App;