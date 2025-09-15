import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  opacity: number;
  life: number;
  maxLife: number;
  size: number;
}

export default function MouseEffects() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const spotlightRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<Particle[]>([]);
  const mousePos = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();
  const lastSparkleTime = useRef(0);

  useEffect(() => {
    let isActive = true;

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Update cursor position
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }

      // Update spotlight position (hero section only)
      const heroSpotlight = document.getElementById('hero-spotlight');
      if (heroSpotlight && spotlightRef.current) {
        const rect = heroSpotlight.getBoundingClientRect();
        if (e.clientY >= rect.top && e.clientY <= rect.bottom) {
          spotlightRef.current.style.left = `${e.clientX}px`;
          spotlightRef.current.style.top = `${e.clientY}px`;
          spotlightRef.current.style.opacity = '1';
        } else {
          spotlightRef.current.style.opacity = '0';
        }
      }

      // Create sparkles (throttled)
      const now = Date.now();
      if (now - lastSparkleTime.current > 100) { // Max 10 sparkles per second
        if (Math.random() < 0.3 && particles.length < 4) {
          setParticles(prev => [...prev, {
            x: e.clientX + (Math.random() - 0.5) * 20,
            y: e.clientY + (Math.random() - 0.5) * 20,
            opacity: 1,
            life: 0,
            maxLife: 60,
            size: Math.random() * 3 + 1
          }]);
        }
        lastSparkleTime.current = now;
      }
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic-button')) {
        target.style.transform = 'translate(0, 0)';
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic-button')) {
        target.style.transform = 'translate(0, 0)';
      }
    };

    const handleMouseMoveOnButton = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.classList.contains('magnetic-button')) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          const strength = 1 - distance / maxDistance;
          const moveX = x * strength * 0.3;
          const moveY = y * strength * 0.3;
          target.style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      }
    };

    // Trail animation
    const updateTrail = () => {
      if (!isActive) return;
      
      if (trailRef.current) {
        const dx = mousePos.current.x - parseFloat(trailRef.current.style.left || '0');
        const dy = mousePos.current.y - parseFloat(trailRef.current.style.top || '0');
        
        trailRef.current.style.left = `${parseFloat(trailRef.current.style.left || '0') + dx * 0.15}px`;
        trailRef.current.style.top = `${parseFloat(trailRef.current.style.top || '0') + dy * 0.15}px`;
      }

      // Update particles
      setParticles(prev => 
        prev.map(particle => ({
          ...particle,
          life: particle.life + 1,
          opacity: Math.max(0, 1 - particle.life / particle.maxLife)
        })).filter(particle => particle.life < particle.maxLife)
      );

      animationRef.current = requestAnimationFrame(updateTrail);
    };

    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseenter', handleMouseEnter, true);
    document.addEventListener('mouseleave', handleMouseLeave, true);
    document.addEventListener('mousemove', handleMouseMoveOnButton, { passive: true });
    
    // Start animation
    animationRef.current = requestAnimationFrame(updateTrail);

    // Parallax effect for cards
    const handleParallax = (e: MouseEvent) => {
      const cards = document.querySelectorAll('.parallax-card');
      cards.forEach(card => {
        const rect = card.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
          const strength = 1 - distance / 200;
          const rotateX = (deltaY / rect.height) * strength * 8;
          const rotateY = (deltaX / rect.width) * strength * -8;
          (card as HTMLElement).style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        } else {
          (card as HTMLElement).style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        }
      });
    };

    document.addEventListener('mousemove', handleParallax, { passive: true });

    return () => {
      isActive = false;
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter, true);
      document.removeEventListener('mouseleave', handleMouseLeave, true);
      document.removeEventListener('mousemove', handleMouseMoveOnButton);
      document.removeEventListener('mousemove', handleParallax);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particles.length]);

  return (
    <>
      {/* Custom Cursor */}
      <div
        ref={cursorRef}
        className="fixed w-2 h-2 bg-purple-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'none'
        }}
      />

      {/* Cursor Trail */}
      <div
        ref={trailRef}
        className="fixed w-8 h-8 border-2 border-purple-400/50 rounded-full pointer-events-none z-[9998]"
        style={{
          transform: 'translate(-50%, -50%)',
          transition: 'none'
        }}
      />

      {/* Hero Spotlight */}
      <div
        ref={spotlightRef}
        className="fixed w-96 h-96 pointer-events-none z-[9997] opacity-0 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(139, 92, 246, 0.05) 50%, transparent 100%)',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(1px)'
        }}
      />

      {/* Sparkle Particles */}
      {particles.map((particle, index) => (
        <div
          key={index}
          className="fixed pointer-events-none z-[9996] bg-purple-400 rounded-full"
          style={{
            left: `${particle.x}px`,
            top: `${particle.y}px`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            opacity: particle.opacity,
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 6px rgba(139, 92, 246, 0.8)'
          }}
        />
      ))}
    </>
  );
}