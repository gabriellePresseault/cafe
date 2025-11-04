import "./Tableau.css"

const Tableau = () => {
    return (
        <div className="Tableau">
            <div className="Text">
                <h1>Machine à Café</h1>
                <ol>
                    <li>
                        ~ Déposez le café en cliquant dessu ~ {/* Ouvrir la machine */}
                    </li>
                    <li>
                        ~ Cliquez sur grain en cliquant dessu ~
                    </li>
                    <li>
                        ~ Modifiez la température en tournant la roulette ~
                    </li>
                    <li>
                        ~ Cliquez sur les trois boutons pour mettre de la crème ~
                    </li>
                    <li>
                        ~ Reprennez votre café en appuyant dessu. ~
                    </li>
                    <li>
                        ~ Appréciez votre café! ~
                    </li>
                </ol>
            </div>
            <div className="Details">
                <h2>Détails techniques</h2>
                <ol>
                    <li>~ 20 g de café ~</li>
                    <li>~ Température entre 200 °F et 230 °F ~</li>
                    <li>~ Appuyer sur les trois boutons ~</li>
                </ol>
            </div>
            <div className="Illustrations">
                <div>
                    <img src="/img/cafeBon.png" alt="Oui!" />
                    <p>Oui!</p>
                </div>
                <div>
                    <img src="/img/cafeMal.png" alt="Non!" />
                    <p>Non!</p>
                </div>
            </div>
            <p className="conditions">Ce projet contient une image générée à l'aide de l'intelligence artificielle d'Adobe Firefly</p>
        </div>
    );
}

export default Tableau;