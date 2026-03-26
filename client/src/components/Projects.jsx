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
        <div className="project-row outline-hover">
          <div className="project-index">_01</div>
          <div style={{ flex: 1 }}>
            <h3 className="project-title">Platform Progress Check</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Role-based student performance tracking system to monitor coding activity across LeetCode, HackerRank, and GFG.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>MERN Stack</span>
              <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
            </div>
          </div>
        </div>

        <div className="project-row outline-hover">
          <div className="project-index">_02</div>
          <div style={{ flex: 1 }}>
            <h3 className="project-title">EasyLearn – Collaborative Platform</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              Web-based learning platform enabling users to share resources and participate in discussions with secure REST APIs.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>React.js / Express</span>
              <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
            </div>
          </div>
        </div>

        <div className="project-row outline-hover">
          <div className="project-index">_03</div>
          <div style={{ flex: 1 }}>
            <h3 className="project-title">E-Case Management System</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', maxWidth: '600px' }}>
              CMS enabling efficient digital handling of case records with full CRUD operations.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <span style={{ color: 'var(--accent-blue)', fontFamily: 'Oxanium', fontSize: '0.9rem' }}>PHP / MySQL</span>
              <a href="https://github.com/adityasingh1409" target="_blank" rel="noreferrer" style={{ color: '#fff' }}><i className="ph ph-github-logo"></i></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
