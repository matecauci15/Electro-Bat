

import { Navbar } from './assets/NavBar'
import { AboutSection } from './assets/AboutSection'
// import { Route, Routes } from 'react-router-dom'
import './index.css'
import { Banner } from './assets/Banner'
// import { TermsAndConditions } from './Components/TermsAndConditions'
import { ContactSection } from './assets/ContactSection'
import { TrucksSection } from './assets/TruckSection'
import { BatteriesSection } from './assets/BatteriesSection'
// import { Footer } from './assets/Footer'

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <main>
        <section id="about">
          <AboutSection />
        </section>
        <section id="contacto">
          <ContactSection />
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
      </main>
      {/* <Footer /> */}
      {/* <Footer /> */}
    </div>
  );
}

export default App;
