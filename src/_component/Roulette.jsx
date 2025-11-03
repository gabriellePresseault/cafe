'use client';

import "./Roulette.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import Temperature from "./Temperature";

gsap.registerPlugin(Draggable);

const Roulette = ({rot, setRot, isValidTemperature}) => {
  const knobRef = useRef(null);
  

  useEffect(() => {
    if (!knobRef.current) return;

    const draggable = Draggable.create(knobRef.current, {
      type: "rotation",
      onDrag: function () {
        setRot(this.rotation);
      },
    })[0];

    return () => draggable.kill();
  }, []);

  return (
    <div className="Roulette">
      <svg className="contenue" ref={knobRef} id="knob" width="280" height="280">
        <circle
          cx="140"
          cy="140"
          r="90"
          fill="lightgray"
          stroke="gray"
          strokeWidth="7"
        />
      </svg>
      <Temperature rotation={Math.round(rot)} />
    </div>
  );
};

export default Roulette;