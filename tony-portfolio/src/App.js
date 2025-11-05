import React from 'react';
import './App.css';
import './styles/Main.css';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Workflow from './components/Workflow';
import CaseStudies from './components/CaseStudies';
import Channels from './components/Channels';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Services />
      <Workflow />
      <CaseStudies />
      <Channels />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
