'use client'
 
import "./Cafe.css";
import { gsap } from "gsap";
import { useRef } from "react";
 
const Cafe = () => {
  const cafeRef = useRef();
 
  const handleClick = () => {
   
    gsap.to(cafeRef.current, {
      scale: 1.2,        
      duration: 0.5,    
      ease: "power2.out"
    });
  };
 
  return (
    <div
      className="CafeZone"
      ref={cafeRef}
      onClick={handleClick}
    ></div>
  );
};
 
export default Cafe;
