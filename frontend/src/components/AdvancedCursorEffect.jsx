import React, { useState, useEffect, useRef } from "react";

const AdvancedCursorEffect = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [prevPosition, setPrevPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [speed, setSpeed] = useState(0);
  const [hue, setHue] = useState(120); // Start with green (120deg in HSL)
  const requestRef = useRef();
  const previousTimeRef = useRef();

  const animate = (time) => {
    if (previousTimeRef.current !== undefined) {
      // Calculate cursor speed
      const deltaX = position.x - prevPosition.x;
      const deltaY = position.y - prevPosition.y;
      const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      const currentSpeed = Math.min(distance * 0.5, 100);
      setSpeed(currentSpeed);
      
      // Update hue based on speed
      setHue((prevHue) => (prevHue + currentSpeed * 0.3) % 360);
      
      // Update previous position
      setPrevPosition({ x: position.x, y: position.y });
    }
    
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    
    requestRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  const cursorSize = 250 + speed * 1.5;
  const opacity = Math.min(0.3 + speed * 0.005, 0.5);

  return (
    <>
      {/* Main glow effect */}
      <div
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          width: `${cursorSize}px`,
          height: `${cursorSize}px`,
          borderRadius: "50%",
          background: `radial-gradient(circle, hsla(${hue}, 80%, 60%, ${opacity}) 0%, hsla(${hue}, 80%, 60%, ${opacity/2}) 50%, rgba(0, 0, 0, 0) 70%)`,
          transform: `translate(${position.x - cursorSize/2}px, ${position.y - cursorSize/2}px)`,
          opacity: isVisible ? 1 : 0,
          transition: "opacity 0.3s ease",
          mixBlendMode: "screen",
        }}
      />
      
      {/* Secondary small cursor */}
      <div
        style={{
          position: "fixed",
          pointerEvents: "none",
          zIndex: 10000,
          width: "10px",
          height: "10px",
          borderRadius: "50%",
          backgroundColor: `hsl(${hue}, 80%, 60%)`,
          transform: `translate(${position.x - 5}px, ${position.y - 5}px)`,
          opacity: isVisible ? 1 : 0,
          boxShadow: `0 0 10px 2px hsla(${hue}, 80%, 60%, 0.7)`,
        }}
      />
    </>
  );
};

export default AdvancedCursorEffect;