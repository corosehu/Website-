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
import ParticlesBackground from './components/ParticlesBackground';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';

const SectionDivider = () => <div className="section-divider" />;

function App() {
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <ParticlesBackground />
      <div className="main-content">
        <Hero />
        <AnimatedSection>
          <Channels />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <AboutMe />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <Services />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <Workflow />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <FAQ />
        </AnimatedSection>
        <SectionDivider />
        <AnimatedSection>
          <Contact />
        </AnimatedSection>
        <Footer />
      </div>
    </div>
  );
}

export default App;
