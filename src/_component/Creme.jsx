'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Creme.css";

const Creme = ({ click, onBoutonClick }) => {
  const bRef = useRef();
    const b2Ref=useRef();
  useEffect(() => {
    if (!bRef.current) return;

    gsap.to(bRef.current, {
      backgroundColor: click ? "green" : "#585757", 
      duration: 0.3,
      ease: "power2.out",
    });
  }, [click]);
  useEffect(()=>{
    if(!b2Ref.current,{
        backgroundColor:click ? "green" : "#585757",
    });
  },[click]);
  return (
    <div>
      <div className="CremeZone"></div>

      <div className="BoutonZone">
        <div className="B1" ref={bRef} onClick={onBoutonClick}></div>
        <div className="B2" ref={b2Ref} onClick={onBoutonClick}></div>
        <div className="B3" onClick={onBoutonClick}></div>
      </div>
    </div>
  );
};

export default Creme;
