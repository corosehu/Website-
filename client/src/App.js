import './App.css';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import Workflow from './components/Workflow';
import Channels from './components/Channels';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <div className="App">
      <AnimatedSection>
        <Hero />
      </AnimatedSection>
      <AnimatedSection>
        <AboutMe />
      </AnimatedSection>
      <AnimatedSection>
        <Services />
      </AnimatedSection>
      <AnimatedSection>
        <Workflow />
      </AnimatedSection>
      <AnimatedSection>
        <Channels />
      </AnimatedSection>
      <AnimatedSection>
        <FAQ />
      </AnimatedSection>
      <AnimatedSection>
        <Contact />
      </AnimatedSection>
      <Footer />
    </div>
  );
}

export default App;
