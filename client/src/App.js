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

const SectionDivider = () => <div className="section-divider" />;

function App() {
  return (
    <div className="App">
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
  );
}

export default App;
