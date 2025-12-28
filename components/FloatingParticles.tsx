
import React, { useEffect, useState } from 'react';

const FloatingParticles: React.FC = () => {
  const [particles, setParticles] = useState<any[]>([]);

  useEffect(() => {
    const particleCount = 25;
    const tempParticles = [];
    
    for (let i = 0; i < particleCount; i++) {
      tempParticles.push({
        id: i,
        size: Math.random() * 2 + 1,
        left: Math.random() * 100,
        delay: Math.random() * 20,
        duration: Math.random() * 15 + 10,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
    setParticles(tempParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.left}%`,
            bottom: '-20px',
            animation: `float ${p.duration}s linear ${p.delay}s infinite`,
            opacity: p.opacity,
            boxShadow: `0 0 10px #c9a24a`,
          }}
        />
      ))}
      
      {/* Light leaks */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#c9a24a]/5 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#d4af37]/5 blur-[120px] rounded-full"></div>
    </div>
  );
};

export default FloatingParticles;
