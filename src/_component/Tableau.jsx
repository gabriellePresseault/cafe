import "./Tableau.css"

const Tableau = () => {
    return (
        <div className="Tableau">
            <div className="Text">
                <h1>Machine à Café</h1>
                <ol>
                    <li>
                        <p>~ Déposez le café ~</p> {/* Ouvrir la machine */}
                    </li>
                    <li>
                        <p>~ Ajouter du grain en cliquant dessu ~</p>
                    </li>
                    <li>
                        <p>~ Modifier la température ~</p>
                    </li>
                    <li>
                        <p>~ Fabriquez de la crème ~</p>
                    </li>
                    <li>
                        <p>~ Appréciez votre café! ~</p>
                    </li>
                </ol>
            </div>
            <div className="Illustrations">
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>Oui!</p>
                </div>
                <div>
                    {/* <img src="" alt="" /> */}
                    <p>Non!</p>
                </div>
            </div>
        </div>
    );
}

export default Tableau;