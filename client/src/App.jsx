import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

function App() {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'certificates', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="vignette-overlay"></div>
      
      <Navbar />

      <aside className="sidebar-left">
        {['hero', 'about', 'skills', 'projects', 'certificates', 'contact'].map(sec => (
          <a key={sec} href={`#${sec}`} className={`nav-dot ${activeSection === sec ? 'active' : ''}`} title={sec}></a>
        ))}
      </aside>

      <aside className="sidebar-right">
        <a href="mailto:adityasingh2824@gmail.com" className="social-icon"><i className="ph ph-envelope-simple"></i></a>
        <a href="https://linkedin.com/in/aditya-singh12/" target="_blank" rel="noreferrer" className="social-icon"><i className="ph ph-linkedin-logo"></i></a>
        <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" className="social-icon"><i className="ph ph-github-logo"></i></a>
      </aside>
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <footer style={{ textAlign: 'center', padding: '2rem', borderTop: '1px solid var(--outline-color)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
        &copy; 2026 Aditya Singh. Crafted with Intensity.
      </footer>
    </>
  );
}

export default App;
