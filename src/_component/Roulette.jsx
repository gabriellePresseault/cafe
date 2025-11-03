'use client';

import "./Roulette.css";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const Roulette = () => {
  const knobRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    if (!knobRef.current) return;

    const draggable = Draggable.create(knobRef.current, {
      type: "rotation",
      onDrag: function () {
        setRotation(this.rotation); // 👈 Save the rotation in state
      },
    })[0];

    return () => draggable.kill(); // cleanup
  }, []);

  return (
    <div className="Roulette">
      <svg className="contenue" ref={knobRef} id="knob" width="280" height="280">
        <circle
          cx="140"
          cy="140"
          r="90"
          fill="gray"
          stroke="lightgray"
          strokeWidth="5"
        />
      </svg>
      <p>{Math.round(rotation)}°C</p>
    </div>
  );
};

export default Roulette;