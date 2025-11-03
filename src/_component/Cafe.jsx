'use client'

import "./Cafe.css";
import { gsap } from "gsap";
import { useRef, useLayoutEffect } from "react";

const Cafe = ({ isOn, handleClick }) => {
  const cafeRef = useRef();

  useLayoutEffect(() => {
    if (!cafeRef.current) return;

    // Kill any previous tweens on this element
    gsap.killTweensOf(cafeRef.current);

    // Set the starting state explicitly
    gsap.set(cafeRef.current, {
      scale: isOn ? 0.9 : 1,
      x: isOn ? -80 : 0,
      y: isOn ? 80 : 0,
    });

    // Then animate to the target state
    gsap.to(cafeRef.current, {
      scale: isOn ? 1 : 0.9,
      x: isOn ? 0 : -80,
      y: isOn ? 0 : 80,
      duration: 0.5,
      ease: "power2.out",
    });
  }, [isOn]); // triggers only when state changes

  return (
    <div
      className={`CafeZone ${isOn ? 'on' : ''}`} 
      ref={cafeRef}
      onClick={handleClick}
    ></div>
  );
};

export default Cafe;
