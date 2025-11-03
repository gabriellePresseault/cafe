'use client'
import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";
import { useEffect, useState } from "react";
import ConteurGramme from "./ConteurGramme";

import "./Machine.css"

const Machine = () => {
   const [isOn,setIsOn]= useState(false);
   
   useEffect(()=>{

   },[isOn])
const handleClick=()=>{
    setIsOn(isOn?false:true)
}

    const [nbgramme, setgramme]= useState(0)
    const aumGramme=()=>{
        setgramme(nbgramme+1);
    }
    

    return (
        <div className="Machine">
            <span className="grain">
                <Grain isOn={isOn} aumGramme={aumGramme}/>
                <ConteurGramme conter={nbgramme}/>
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