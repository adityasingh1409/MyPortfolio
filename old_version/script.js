// Optional Animations / Interactivity

document.addEventListener('DOMContentLoaded', () => {
    // Reveal text elements smoothly on scroll
    const sections = document.querySelectorAll('.section');
    
    // Simple Intersection Observer to fade in elements
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => {
        sec.style.opacity = '0';
        sec.style.transform = 'translateY(20px)';
        sec.style.transition = 'all 0.6s ease-out';
        observer.observe(sec);
    });

    const styleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(sec => {
        styleObserver.observe(sec);
    });

    // Network Particle Animation
    const canvas = document.getElementById('glitter'); // reusing the same canvas ID
    const ctx = canvas.getContext('2d');
    
    let w, h;
    let particles = [];
    
    // Mouse properties for hover interactions
    let mouse = {
        x: null,
        y: null,
        radius: 120
    };

    window.addEventListener('mousemove', (event) => {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    function resize() {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    }
    
    window.addEventListener('resize', resize);
    resize();
    
    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.size = Math.random() * 2 + 1;
            this.speedX = Math.random() * 1.5 - 0.75; 
            this.speedY = Math.random() * 1.5 - 0.75; 
            this.color = '#3b82f6'; // Match the gradient accent color
        }
        
        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            
            // Wrap around edges to create continuous flow
            if (this.x < 0) this.x = w;
            if (this.x > w) this.x = 0;
            if (this.y < 0) this.y = h;
            if (this.y > h) this.y = 0;

            // Mouse repel / interact
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < mouse.radius) {
                    const forceDirectionX = dx / distance;
                    const forceDirectionY = dy / distance;
                    // Move particles slightly away from mouse
                    this.x -= forceDirectionX * 1.5;
                    this.y -= forceDirectionY * 1.5;
                }
            }
        }
        
        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }
    
    function init() {
        particles = [];
        // Create an appropriate amount of particles based on screen size
        const numParticles = Math.floor((w * h) / 9000); 
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }
    
    function animate() {
        ctx.clearRect(0, 0, w, h);
        
        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
            
            // Draw connecting lines (the "network" effect)
            for (let j = i; j < particles.length; j++) {
                let dx = particles[i].x - particles[j].x;
                let dy = particles[i].y - particles[j].y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                // Connect variables if they are close enough
                if (distance < 110) {
                    ctx.beginPath();
                    // Fade the line based on how far the particles are
                    const opacity = 1 - (distance / 110);
                    ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.4})`; // Accent color with fading opacity
                    ctx.lineWidth = Math.max(0.5, opacity); // Thicker line when closer
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(animate);
    }
    
    init();
    animate();
});
