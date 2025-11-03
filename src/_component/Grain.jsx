'use client';
import { gsap } from "gsap";
import "./Grain.css";
import { useEffect, useRef } from "react";
import ConteurGramme from "./ConteurGramme";

const Grain = ({ aumGramme, isOn, conter }) => {
    const grainRef = useRef();

    const animationGrain = () => {
        gsap.fromTo(grainRef.current,
            { backgroundSize: "30em" },
            { backgroundSize:"32em", duration: 0.2, ease: "power2.out", yoyo: true, repeat: 1 });
    };

    return (
        <div
            className="GrainZone"
            ref={grainRef}
            onClick={() => {
                aumGramme(); // call the parent function
                animationGrain(); // trigger GSAP animation
            }}
        >
         <ConteurGramme className={"conteur"} isOn={isOn} conter={conter}/>
        </div>
    );
};

export default Grain;
