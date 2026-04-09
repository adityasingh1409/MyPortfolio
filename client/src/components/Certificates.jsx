import React, { useState } from 'react';

const certificatesData = [
  {
    id: 1,
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    date: 'Feb 2026',
    file: '/certificates/javascript_intermediate certificate.pdf',
    type: 'pdf'
  },
  {
    id: 2,
    title: 'C++ Programming: OOPs & DSA',
    issuer: 'CSE Pathshala',
    date: 'Aug 2025',
    file: '/certificates/cse pathshala.jpeg',
    type: 'image'
  },
  {
    id: 3,
    title: 'Cloud Computing',
    issuer: 'NPTEL',
    date: 'Jan - Apr 2025',
    file: '/certificates/Cloud Computing (1) (1).pdf',
    type: 'pdf'
  },
  {
    id: 4,
    title: 'Responsive Web Design',
    issuer: 'FreeCodeCamp',
    date: 'Nov 2023',
    file: '/certificates/responsivewebdesign.jpeg',
    type: 'image'
  }
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const openCertificate = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeCertificate = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="certificates" className="section visible" style={{ position: 'relative' }}>
      <h2 className="section-title">Licenses & <span className="gradient-text">Certifications</span></h2>
      
      <div className="cert-grid" style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', 
        gap: '2rem',
        padding: '1rem 0'
      }}>
        {certificatesData.map((cert) => (
          <div 
            key={cert.id}
            className="cert-card"
            onClick={() => openCertificate(cert)}
            style={{ 
              background: 'var(--glass-bg)', 
              border: '1px solid var(--glass-border)', 
              padding: '2rem', 
              borderRadius: '16px', 
              display: 'flex', 
              flexDirection: 'column',
              alignItems: 'center', 
              gap: '1rem',
              cursor: 'pointer',
              transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              position: 'relative',
              overflow: 'hidden',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
              e.currentTarget.style.borderColor = 'var(--accent-color)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 240, 255, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.borderColor = 'var(--glass-border)';
              e.currentTarget.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
            }}
          >
            <div style={{
              background: 'linear-gradient(135deg, rgba(0, 240, 255, 0.1), rgba(112, 0, 255, 0.1))',
              borderRadius: '50%',
              width: '80px',
              height: '80px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '0.5rem'
            }}>
              <i className="ph ph-certificate" style={{ fontSize: '3rem', color: 'var(--accent-color)' }}></i>
            </div>
            <div>
              <h4 style={{ color: 'var(--text-primary)', marginBottom: '0.5rem', fontSize: '1.2rem', fontWeight: '600' }}>{cert.title}</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', marginBottom: '0.3rem' }}>{cert.issuer}</p>
              <p style={{ color: 'var(--accent-color)', fontSize: '0.8rem', opacity: 0.8, letterSpacing: '1px', textTransform: 'uppercase' }}>{cert.date}</p>
            </div>
            
            {/* Subtle View Text on Card */}
            <div style={{ marginTop: '1rem', fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span>Click to view</span>
              <i className="ph ph-arrow-right"></i>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Overlay */}
      {selectedCert && (
        <div 
          className="modal-overlay"
          onClick={closeCertificate}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(5, 5, 10, 0.85)',
            backdropFilter: 'blur(12px)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }}
        >
          <div 
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--dark-bg)',
              border: '1px solid var(--accent-color)',
              borderRadius: '20px',
              width: '90%',
              maxWidth: '1000px',
              height: '85vh',
              position: 'relative',
              overflow: 'hidden',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 0 50px rgba(0, 240, 255, 0.2)',
              animation: 'modalPopup 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            {/* Modal Header */}
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid rgba(255,255,255,0.1)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'rgba(0,0,0,0.4)'
            }}>
              <div>
                <h3 style={{ margin: 0, color: 'var(--text-primary)', fontSize: '1.3rem' }}>{selectedCert.title}</h3>
                <span style={{ color: 'var(--accent-color)', fontSize: '0.9rem' }}>{selectedCert.issuer}</span>
              </div>
              <button 
                onClick={closeCertificate}
                style={{
                  background: 'rgba(255, 255, 255, 0.1)',
                  border: 'none',
                  color: 'white',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.5rem',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255, 50, 50, 0.8)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)'}
              >
                <i className="ph ph-x"></i>
              </button>
            </div>

            {/* Modal Body */}
            <div style={{ flex: 1, padding: '1rem', background: '#e0e0e0', display: 'flex', justifyContent: 'center', alignItems: 'center', position: 'relative' }}>
              {selectedCert.type === 'image' ? (
                <img 
                  src={selectedCert.file} 
                  alt={selectedCert.title} 
                  style={{ 
                    maxWidth: '100%', 
                    maxHeight: '100%', 
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
                  }} 
                />
              ) : (
                <iframe 
                  src={`${selectedCert.file}#toolbar=0`}
                  title={selectedCert.title}
                  style={{ width: '100%', height: '100%', border: 'none' }}
                />
              )}
            </div>
          </div>
          
          <style>{`
            @keyframes modalPopup {
              0% { transform: scale(0.8); opacity: 0; }
              100% { transform: scale(1); opacity: 1; }
            }
          `}</style>
        </div>
      )}
    </section>
  );
};

export default Certificates;
