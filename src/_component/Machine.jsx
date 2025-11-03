'use client'
import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Roulette from "./Roulette";
import { useEffect, useState } from "react";

import "./Machine.css"

const Machine = () => {
   const [isOn,setIsOn]= useState(false);
   const [rotation, setRotation] = useState(0);
   useEffect(()=>{

   },[isOn])
const handleClick=()=>{
    setIsOn(isOn?false:true)
}




























    const isValidTemperature = rotation >= 200 && rotation <= 230;
    return (
        <div className="Machine">
            <span className="grain">
                <Grain />
            </span>
            <span className="temperature" >
                <Roulette isOn={isOn} 
                 rot={rotation} 
                 setRot={setRotation}
                 isValidTemperature={isValidTemperature}
                 />
            </span>
            <span className="cafe" >
                <Cafe isOn={isOn} handleClick={handleClick}/>

            </span>
            <span className="creme">
                <Creme />
            </span>
        </div>
    );
}

export default Machine;