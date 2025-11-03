'use client'
import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";

import "./Machine.css"

const Machine = () => {
   const [isOn,setIsOn]= useState(false);
   useEffect(()=>{

   },[isOn])
const handleClick=()=>{
    setIsOn(isOn?false:true)
}
    return (
        <div className="Machine">
            <span className="grain">
                <Grain />
            </span>
            <span className="temperature" >
                <Temperature />
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