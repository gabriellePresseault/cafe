'use client'

import "./Cafe.css";
import { gsap } from "gsap";
import { useRef, useLayoutEffect, useState } from "react";

const Cafe = ({ isOn, handleClick, iscafeBon }) => {
  const cafeRef = useRef();
  const [clickedOnce, setClickedOnce] = useState(false);
  const onLocalClick = (e) => {
    if (!clickedOnce) setClickedOnce(true);
    if (typeof handleClick === "function") handleClick(e);
  };
  let imgBM = "/img/cafevide.png";

  if (clickedOnce) {

    if (isOn && !iscafeBon) imgBM = "/img/cafeMal.png";
    if (iscafeBon) imgBM = "/img/cafeBon.png";
  } else {

    imgBM = "/img/cafevide.png";
  }

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
      onClick={onLocalClick}
      style={{ backgroundImage: `url(${imgBM})` }}
    ></div >
  );
};

export default Cafe;
