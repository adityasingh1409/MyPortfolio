import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="section" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', zIndex: 10, width: '100%' }}>
        
        {/* Adjusted titles for guaranteed visibility */}
        <h2 className="massive-title" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginBottom: '0.2rem' }}>
          CONVERSATION
        </h2>
        <h2 className="massive-title outline-text" style={{ fontSize: 'clamp(3rem, 6vw, 6rem)', marginBottom: '3rem' }}>
          COMES FIRST
        </h2>
        
        {/* Glassmorphism attractive contact card */}
        <div style={{
          maxWidth: '600px',
          margin: '0 auto',
          background: 'rgba(15, 15, 15, 0.65)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          borderRadius: '24px',
          padding: '3rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.5), inset 0 0 0 1px rgba(255,255,255,0.05)'
        }}>
          
          <form className="contact-form" onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            
            <div style={{ display: 'flex', gap: '1.5rem', width: '100%' }}>
              <input 
                type="text" 
                placeholder="Name" 
                className="contact-input" 
                style={{ marginBottom: '0', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid transparent', borderBottom: '2px solid rgba(255,255,255,0.1)' }} 
              />
              <input 
                type="email" 
                placeholder="Email" 
                className="contact-input" 
                style={{ marginBottom: '0', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid transparent', borderBottom: '2px solid rgba(255,255,255,0.1)' }} 
              />
            </div>
            
            <textarea 
              placeholder="Your Message..." 
              className="contact-input" 
              rows="5" 
              style={{ resize: 'vertical', marginBottom: '0', background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '8px', border: '1px solid transparent', borderBottom: '2px solid rgba(255,255,255,0.1)', minHeight: '120px' }}
            ></textarea>
            
            <button type="submit" className="btn-tech" style={{ marginTop: '1rem', padding: '1.2rem', justifyContent: 'center', background: 'var(--text-main)', color: '#000', fontWeight: 'bold' }}>
              <i className="ph ph-paper-plane-tilt" style={{ fontSize: '1.2rem' }}></i> INITIATE TRANSMISSION
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
};

export default Contact;
