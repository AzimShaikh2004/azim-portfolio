import React, { useRef, useState } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  className?: string;
}

export const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.6s ease-in-out",
  className = ''
}: MagnetProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [transform, setTransform] = useState('translate3d(0px, 0px, 0px)');
  const [transition, setTransition] = useState(inactiveTransition);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    
    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const distanceX = mouseX - centerX;
    const distanceY = mouseY - centerY;
    
    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    
    // Check if mouse is within padding + element bounds
    const isWithinBounds = 
      mouseX >= left - padding && 
      mouseX <= left + width + padding &&
      mouseY >= top - padding &&
      mouseY <= top + height + padding;

    if (isWithinBounds) {
      setTransform(`translate3d(${distanceX / strength}px, ${distanceY / strength}px, 0)`);
      setTransition(activeTransition);
    } else {
      setTransform('translate3d(0px, 0px, 0px)');
      setTransition(inactiveTransition);
    }
  };

  const handleMouseLeave = () => {
    setTransform('translate3d(0px, 0px, 0px)');
    setTransition(inactiveTransition);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{
        transform,
        transition,
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
