import Grain from "./Grain";
import Cafe from "./Cafe";
import Creme from "./Creme";
import Temperature from "./Temperature";



const Machine = () => {
    // const [nbgrain, setNbGrain]=useState();

    // const augGrains=()=>{
    //     setNbGrain(nbgrain+1)
    // }

    // console.log(nbgrain)
    return (
        <div>
            <Grain />
            <Temperature/>
            <Cafe/>
            <Creme/>
        </div>
    );
}  

export default Machine;