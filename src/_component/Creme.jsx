'use client'
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./Creme.css";

const Creme = ({ click, onBoutonClick }) => {
  const b1Ref = useRef();
  const b2Ref = useRef();
  const b3Ref = useRef();

  
  useEffect(() => {
    if (!b1Ref.current) return;
    gsap.to(b1Ref.current, {
      backgroundColor: click.b1 ? "green" : "#585757",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [click.b1]);

  
  useEffect(() => {
    if (!b2Ref.current) return;
    gsap.to(b2Ref.current, {
      backgroundColor: click.b2 ? "green" : "#585757",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [click.b2]);

  
  useEffect(() => {
    if (!b3Ref.current) return;
    gsap.to(b3Ref.current, {
      backgroundColor: click.b3 ? "green" : "#585757",
      duration: 0.3,
      ease: "power2.out",
    });
  }, [click.b3]);

  return (
    <div>
      <div className="CremeZone"></div>

      <div className="BoutonZone">
        <div className="B1" ref={b1Ref} onClick={() => onBoutonClick("b1")}></div>
        <div className="B2" ref={b2Ref} onClick={() => onBoutonClick("b2")}></div>
        <div className="B3" ref={b3Ref} onClick={() => onBoutonClick("b3")}></div>
      </div>
    </div>
  );
};

export default Creme;
