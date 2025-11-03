'use client'
import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Roulette from "./Roulette";
import { useEffect, useState } from "react";
import ConteurGramme from "./ConteurGramme";

import "./Machine.css"

const Machine = () => {
    const [isOn, setIsOn] = useState(true);
    const [rotation, setRotation] = useState(0);

    const handleClick = () => {
        setIsOn(isOn ? false : true)
    }
    const isValidTemperature = rotation >= 200 && rotation <= 230;
    const [nbgramme, setgramme] = useState(0)
    const aumGramme = () => {
        setgramme(nbgramme + 1);
    }
    
    const [click, setClick] = useState(false);
     const auclick = () => setClick(prev => !prev);

       const [clicks, setClicks] = useState({
    b1: false,
    b2: false,
    b3: false,
  });
   const handleBoutonClick = (id) => {
    setClicks((prev) => ({
      ...prev,
      [id]: !prev[id], 
    }));
    
    if (id === "b1") console.log("Machine → Bouton 1 activé !");
    if (id === "b2") console.log("Machine → Bouton 2 activé !");
    if (id === "b3") console.log("Machine → Bouton 3 activé !");
  };

     
    return (
        <div className="Machine">
            <span className="grain">
                <Grain isOn={isOn} aumGramme={aumGramme} conter={nbgramme} />
            </span>
            <span className="temperature" >
                <Roulette isOn={isOn}
                    rot={rotation}
                    setRot={setRotation}
                    isValidTemperature={isValidTemperature}
                />
            </span>
            <span className="cafe" >
                <Cafe isOn={isOn} handleClick={handleClick} />

            </span>
            <span className="creme">
                 <Creme click={clicks} onBoutonClick={handleBoutonClick}  />
            </span>
        </div>
    );
}

export default Machine;