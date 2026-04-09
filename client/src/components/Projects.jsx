import React from 'react';

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="section-header">
        <span className="header-subtitle">EACH PROJECT SHAPED HOW I WORK TODAY</span>
        <div className="divider"></div>
      </div>
      
      <div style={{ marginBottom: '6rem' }}>
        <h2 className="massive-title">SELECTED</h2>
        <h2 className="massive-title outline-text">PROJECTS</h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', zIndex: 10 }}>
        
        {/* Project 1 */}
        <div className="project-row outline-hover" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '3rem', flex: 1, minWidth: '300px' }}>
            <div className="project-index">_01</div>
            <div>
              <h3 className="project-title">Platform Progress Check</h3>
              <p className="sparkle-hover" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px' }}>
                Role-based student performance tracking system to monitor coding activity across LeetCode, HackerRank, and GFG.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>MERN Stack</span>
                <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, marginTop: '1rem', overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800" 
              alt="Platform Progress Check" 
              style={{ width: '320px', height: '200px', objectFit: 'cover', opacity: 0.8, transition: 'all 0.4s ease', display: 'block' }}
              onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-row outline-hover" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '3rem', flex: 1, minWidth: '300px' }}>
            <div className="project-index">_02</div>
            <div>
              <h3 className="project-title">EasyLearn – Collaborative Platform</h3>
              <p className="sparkle-hover" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px' }}>
                Web-based learning platform enabling users to share resources and participate in discussions with secure REST APIs.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>React.js / Express</span>
                <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, marginTop: '1rem', overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="EasyLearn Platform" 
              style={{ width: '320px', height: '200px', objectFit: 'cover', opacity: 0.8, transition: 'all 0.4s ease', display: 'block' }}
              onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-row outline-hover" style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ display: 'flex', gap: '3rem', flex: 1, minWidth: '300px' }}>
            <div className="project-index">_03</div>
            <div>
              <h3 className="project-title">E-Case Management System</h3>
              <p className="sparkle-hover" style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '500px' }}>
                CMS enabling efficient digital handling of case records with full CRUD operations.
              </p>
              <div style={{ display: 'flex', gap: '1rem' }}>
                <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>PHP / MySQL</span>
                <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
              </div>
            </div>
          </div>
          <div style={{ flexShrink: 0, marginTop: '1rem', overflow: 'hidden', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <img 
              src="/indian_court.png" 
              alt="Indian Courtroom E-Case Management System" 
              style={{ width: '320px', height: '200px', objectFit: 'cover', opacity: 0.8, transition: 'all 0.4s ease', display: 'block' }}
              onMouseOver={e => { e.currentTarget.style.opacity = 1; e.currentTarget.style.transform = 'scale(1.05)'; }}
              onMouseOut={e => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.transform = 'scale(1)'; }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;
