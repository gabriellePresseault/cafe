'use client'
import { useState } from "react";
import "./Grain.css"

const Grain = () => {

    
    return (
        <div className="GrainZone">
            <button onClick={augGrains}></button>
        </div>
    );
}  

export default Grain;