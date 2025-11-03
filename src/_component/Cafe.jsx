'use client'
 
import "./Cafe.css";
import { gsap } from "gsap";
import { useRef } from "react";
 
const Cafe = ({isOn, handleClick}) => {
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
      
    >
      <button onClick={handleClick} className={isOn ? 'on':''}></button>
    </div>
  );
};
 
export default Cafe;
