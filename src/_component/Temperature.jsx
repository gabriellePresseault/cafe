import Roulette from "./Roulette";
import "./Temperature.css"

const Temperature = ({rotation}) => {

    if(rotation<0) rotation=0;
    if(rotation>300) rotation=300;
    return (
        <div className="TemperatureZone">
            <h1>{rotation}°F</h1>
        </div>
    );
}

export default Temperature;