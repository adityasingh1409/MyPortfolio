import React from 'react';

const Certificates = () => {
  return (
    <section id="certificates" className="section visible">
      <h2 className="section-title">Licenses & <span className="gradient-text">Certifications</span></h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="ph ph-certificate" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>JavaScript (Intermediate)</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>HackerRank &bull; Feb 2026</p>
          </div>
        </div>
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="ph ph-certificate" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>C++ Programming: OOPs & DSA</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>CSE Pathshala &bull; Aug 2025</p>
          </div>
        </div>
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="ph ph-certificate" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Cloud Computing</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>NPTEL &bull; Jan - Apr 2025</p>
          </div>
        </div>
        <div style={{ background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '12px', display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <i className="ph ph-certificate" style={{ fontSize: '2.5rem', color: 'var(--accent-color)' }}></i>
          <div>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.2rem' }}>Responsive Web Design</h4>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>FreeCodeCamp &bull; Nov 2023</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
