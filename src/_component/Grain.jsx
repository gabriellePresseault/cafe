
'use client'
import "./Grain.css"
import { gsap } from "gsap";
import { useEffect, useRef  } from "react";

const Grain = ({ aumGramme , isOn}) => {
//   const grainRef = useRef();

  
//    useEffect(()=>{
//     if(!grainRef.current) return;

//     gsap.to(grainRef.current,{
//    scale:isOn ? 1.2:1,
//     duration: 0.3, 
//     ease: "power2.out", 
//     yoyo: true,
//     repeat: 1
// }[isOn])
//    })
   

   
 

  return (
    <div 
      className="GrainZone"
      // ref={grainRef}
      onClick={aumGramme}
      
    ></div>
  );
};

export default Grain;

 