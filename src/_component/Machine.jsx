'use client'
import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Roulette from "./Roulette";
import { useEffect, useState } from "react";
import ConteurGramme from "./ConteurGramme";

import "./Machine.css"

const Machine = () => {
    const [isOn, setIsOn] = useState(false);
    const [rotation, setRotation] = useState(0);
   
    useEffect(() => {

    }, [isOn])
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
     
    return (
        <div className="Machine">
            <span className="grain">
                <Grain isOn={isOn} aumGramme={aumGramme} />
                <ConteurGramme conter={nbgramme} />
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
                 <Creme click={click} onBoutonClick={auclick} />
            </span>
        </div>
    );
}

export default Machine;