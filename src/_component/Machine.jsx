import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";
import { useState } from "react";


const Machine = () => {
    const [nbgrain, setNbGrain]=useState();

    const augGrains=()=>{
        setNbGrain(nbgrain+1)
    }

    console.log(nbgrain)
    return (
        <div>
            <Grain augGrains={augGrains}/>
            <Temperature/>
            <Cafe/>
            <Creme/>
        </div>
    );
}  

export default Machine;