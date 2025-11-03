'use client'

import "./Cafe.css";
import { gsap } from "gsap";
import { useRef, useEffect } from "react";

const Cafe = ({ isOn, handleClick }) => {
  const cafeRef = useRef();

  useEffect(() => {
    if (!cafeRef.current) return;
    
    gsap.to(cafeRef.current, {
      scale: isOn ? 1 : 0.9,
      x: isOn ? 0: -80,  
      y: isOn ? 0 : 80,
      duration: 0.5,
      ease: "power2.out"
    });
  }, [isOn]); 

  return (
    <div
      className={`CafeZone ${isOn ? 'on' : ''}`} 
      ref={cafeRef}
      onClick={handleClick}
    ></div>
  );
};

export default Cafe;