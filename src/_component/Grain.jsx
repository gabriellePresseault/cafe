
'use client'
import "./Grain.css"
import { gsap } from "gsap";
import { useRef } from "react";
 
const Grain = () => {
    const grainRef=useRef();
 
    const handleClick = () => {
   
    gsap.to(grainRef.current, {
      scale: 1.2,        
      duration: 0.5,    
      ease: "power2.out"
    });
     gsap.to(grainRef.current, {
      scale: 1,        
      duration: 0.1,    
      ease: "power2.out"
    });
  };
 
 
    return (
        <div className="GrainZone" ref={grainRef} onDoubleClick={handleClick}></div>
    );
}  
 
export default Grain;
 