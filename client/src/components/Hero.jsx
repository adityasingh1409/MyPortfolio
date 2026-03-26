import React, { useState, useEffect } from 'react';

const Hero = () => {
  const words = ["EXPERIENCES", "ALGORITHMS", "ARCHITECTURES", "SYSTEMS", "LOGIC", "WEB APPS"];
  const [currentWord, setCurrentWord] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="hero" className="section">
      <div style={{ position: 'relative', zIndex: 10, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h1 className="massive-title" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>CRAFTING</h1>
        
        <div style={{ height: 'clamp(3rem, 10vw, 8rem)', overflow: 'hidden', marginLeft: '5vw' }}>
          <h1 
            className="massive-title outline-text" 
            style={{ 
              fontSize: 'clamp(3rem, 10vw, 8rem)', 
              color: 'var(--accent-blue)', 
              WebkitTextStroke: '0px',
              animation: 'fadeInOut 2s infinite'
            }}
          >
            {words[currentWord]}
          </h1>
        </div>
        
        <div style={{ marginTop: '2rem', marginLeft: '5vw', maxWidth: '600px' }}>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
            <strong>Aditya Singh</strong> | Full Stack Developer <br/>
            Computer Science Engineering student crafting scalable web architectures, fast UI interfaces, and robust APIs.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <a href="#projects" className="btn-tech">
              Selected Works
            </a>
            <a href="/AdityaSingh copy.pdf" download="Aditya_Singh_CV.pdf" className="btn-tech">
              <i className="ph ph-download-simple"></i> Download CV
            </a>
          </div>
        </div>
      </div>
      <div style={{ position: 'absolute', bottom: '2rem', left: '0', display: 'flex', alignItems: 'center', gap: '1rem', rotate: '-90deg', transformOrigin: 'left bottom', fontSize: '0.8rem', letterSpacing: '2px', color: 'var(--text-muted)' }}>
        <span style={{ width: '40px', height: '1px', background: 'var(--text-muted)' }}></span>
        SCROLL DOWN
      </div>
    </section>
  );
};

export default Hero;
