import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <div className="section-header">
        <div className="divider"></div>
        <span className="header-subtitle">Behind the console</span>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', zIndex: 10 }}>
        <div>
          <h2 className="oxanium-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>LOGIC & VISUAL INTENTION.</h2>
          <p className="sparkle-hover" style={{ fontSize: '1.1rem', color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
            I'm Aditya, a Full Stack Developer and Computer Science Engineering student focused on crafting clear, modern interfaces that balance aesthetic design and powerful algorithmic functionality.
          </p>
          
          <h3 className="oxanium-text" style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--accent-blue)' }}>Achievements</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-color)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'all 0.3s' }}>
              <i className="ph-fill ph-star" style={{ color: '#ffbd2e', fontSize: '2.5rem' }}></i>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.2rem' }}>5-Star on HackerRank</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Demonstrating advanced problem-solving in Java and C++.</p>
              </div>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid var(--outline-color)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1.5rem', transition: 'all 0.3s' }}>
              <i className="ph-fill ph-fire" style={{ color: '#ff5f56', fontSize: '2.5rem' }}></i>
              <div>
                <h4 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.2rem' }}>LeetCode Consistency</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Maintained a robust coding streak with an 81.36% acceptance rate.</p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="oxanium-text" style={{ fontSize: '2rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>EDUCATION</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            
            <div style={{ borderLeft: '2px solid var(--accent-blue)', paddingLeft: '1.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', background: 'var(--accent-blue)', borderRadius: '50%', boxShadow: '0 0 10px var(--accent-blue)' }}></div>
              <h3 className="oxanium-text" style={{ fontSize: '1.4rem', marginBottom: '0.3rem', color: '#fff' }}>B.Tech - Computer Science & Engineering (CGPA: 6.75)</h3>
              <p style={{ color: 'var(--accent-blue)', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '500' }}>Lovely Professional University</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>Aug 2023 - Present</p>
            </div>
            
            <div style={{ borderLeft: '2px solid var(--outline-color)', paddingLeft: '1.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
              <h3 className="oxanium-text" style={{ fontSize: '1.4rem', marginBottom: '0.3rem', color: '#fff' }}>Intermediate (80%)</h3>
              <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '500' }}>Creative Convent College</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>Apr 2021 - Mar 2022</p>
            </div>

            <div style={{ borderLeft: '2px solid var(--outline-color)', paddingLeft: '1.5rem', position: 'relative' }}>
              <div style={{ position: 'absolute', left: '-6px', top: '5px', width: '10px', height: '10px', background: 'var(--text-muted)', borderRadius: '50%' }}></div>
              <h3 className="oxanium-text" style={{ fontSize: '1.4rem', marginBottom: '0.3rem', color: '#fff' }}>Matriculation (83%)</h3>
              <p style={{ color: '#fff', fontSize: '1rem', marginBottom: '0.5rem', fontWeight: '500' }}>Creative Convent College</p>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontFamily: 'monospace' }}>Apr 2019 - Mar 2020</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
