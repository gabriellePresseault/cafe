import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";

import "./Machine.css"

const Machine = () => {
    return (
        <div className="Machine">
            <span className="grain">
                <Grain />
            </span>
            <span className="temperature" >
                <Temperature />
            </span>
            <span className="cafe" >
                <Cafe />
            </span>
            <span className="creme">
                <Creme />
            </span>
        </div>
    );
}

export default Machine;