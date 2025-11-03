import "./ConteurGramme.css";

const ConteurGramme=({conter, isOn})=>{
    return(
        <div className="ConteurGramme">
            
            <h1>
            {!isOn ? conter +"g" : null} 
            </h1></div>
    )
}
export default ConteurGramme;