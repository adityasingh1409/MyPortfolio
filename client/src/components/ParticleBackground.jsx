import React, { useEffect, useRef } from 'react';

const ParticleBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        
        let w, h;
        let particles = [];
        let animationFrameId;
        
        let mouse = { x: null, y: null, radius: 150 };

        const handleMouseMove = (event) => {
            mouse.x = event.x;
            mouse.y = event.y;
        };
        const handleMouseOut = () => {
            mouse.x = undefined; mouse.y = undefined;
        };

        const resize = () => {
            w = canvas.width = window.innerWidth;
            h = canvas.height = window.innerHeight;
            init();
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);
        window.addEventListener('resize', resize);
        
        class Particle {
            constructor() {
                this.x = Math.random() * w;
                this.y = Math.random() * h;
                this.size = Math.random() * 1.5 + 0.5; // smaller dots
                this.speedX = (Math.random() - 0.5) * 0.5; // slower speed for ambient look
                this.speedY = (Math.random() - 0.5) * 0.5; 
                this.color = 'rgba(255, 255, 255, 0.4)'; // white/gray stars
            }
            
            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                
                if (this.x < 0) this.x = w;
                if (this.x > w) this.x = 0;
                if (this.y < 0) this.y = h;
                if (this.y > h) this.y = 0;

                if (mouse.x != null && mouse.y != null) {
                    let dx = mouse.x - this.x;
                    let dy = mouse.y - this.y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < mouse.radius) {
                        // Repel gently
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        this.x -= forceDirectionX * 0.5;
                        this.y -= forceDirectionY * 0.5;
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
            const numParticles = Math.floor((w * h) / 10000); // Sparsity
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        }
        
        function animate() {
            ctx.clearRect(0, 0, w, h);
            
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
                particles[i].draw();
                
                for (let j = i; j < particles.length; j++) {
                    let dx = particles[i].x - particles[j].x;
                    let dy = particles[i].y - particles[j].y;
                    let distance = Math.sqrt(dx * dx + dy * dy);
                    
                    if (distance < 120) {
                        ctx.beginPath();
                        const opacity = 1 - (distance / 120);
                        // faint blue neon connection lines
                        ctx.strokeStyle = `rgba(0, 168, 255, ${opacity * 0.25})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.stroke();
                    }
                }
            }
            animationFrameId = requestAnimationFrame(animate);
        }
        
        resize();
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas id="glitter" ref={canvasRef}></canvas>;
};

export default ParticleBackground;
