import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', zIndex: 100, background: 'linear-gradient(to bottom, rgba(2,2,2,0.9), transparent)' }}>
      <a href="#" className="oxanium-text" style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-main)', letterSpacing: '1px' }}>
        A.S <span style={{ color: 'var(--accent-blue)' }}>DEV</span>
      </a>
      
      <div style={{ display: 'flex', gap: '2rem', alignItems: 'center', fontFamily: 'Oxanium', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        <a href="#about" style={{ color: 'var(--text-muted)' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>About</a>
        <a href="#projects" style={{ color: 'var(--text-muted)' }} onMouseOver={e => e.target.style.color = '#fff'} onMouseOut={e => e.target.style.color = 'var(--text-muted)'}>Projects</a>
        <a href="#contact" className="btn-tech">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
