'use client';

import "./Roulette.css"

import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { useRef } from "react";

gsap.registerPlugin(Draggable);

const Roulette = () => {

console.clear();


//it doesn't get much easier than this ;)
const draggable = Draggable.create("#knob", {
  type: "rotation",
  onDrag: function() {
    console.log(this.rotation)
  }
});

 console.log(Draggable.get("#knob").rotation, "from the Draggable")

    return (
        <div className="Roulette">
            <svg className="contenue" id="knob" width="280" height="280">
                <circle
                    cx="140"
                    cy="140"
                    r="90"
                    fill="gray"
                    stroke="lightgray"
                    stroke-width="5"
                />
            </svg>
        </div>
    );
}

export default Roulette;