import React from 'react';

const Navbar = () => {
  return (
    <nav style={{ position: 'fixed', top: 0, width: '100%', padding: '2rem 5vw', display: 'flex', justifyContent: 'space-between', zIndex: 100, background: 'linear-gradient(to bottom, rgba(2,2,2,0.9), transparent)' }}>
      <a href="#" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textDecoration: 'none', gap: '0.4rem' }}>
        <div style={{ width: '45px', height: '45px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', border: '2px solid var(--accent-blue)', boxShadow: '0 0 10px var(--accent-glow)', transition: 'transform 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'scale(1.1)'} onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}>
          <img src="/mypic.jpg" alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <span className="oxanium-text" style={{ fontSize: '1rem', fontWeight: 800, color: '#fff', letterSpacing: '1px' }}>
          ADITYA SINGH
        </span>
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
