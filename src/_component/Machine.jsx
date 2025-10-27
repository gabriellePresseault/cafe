import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";

const Machine = () => {
    return (
        <div>
            <Grain/>
            <Temperature/>
            <Cafe/>
            <Creme/>
        </div>
    );
}  

export default Machine;