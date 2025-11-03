import "./Tableau.css"

const Tableau = () => {
    return (
        <div className="Tableau">
            <div className="Text">
                <h1>Machine à Café</h1>
                <ol>
                    <li>
                        ~ Déposez le café ~ {/* Ouvrir la machine */}
                    </li>
                    <li>
                        ~ Cliquez sur grain en cliquant dessu ~
                    </li>
                    <li>
                        ~ Modifiez la température en tournant la roulette ~
                    </li>
                    <li>
                        ~ Cliquez sur la crème pour la mettre en marche ~
                    </li>
                    <li>
                        ~ Appréciez votre café! ~
                    </li>
                </ol>
            </div>
            <div className="Illustrations">
                <div>
                    <img src="/img/cafeBon.png" alt="Oui!" style={{ filter: 'saturate(50%)' }}/>
                    <p>Oui!</p>
                </div>
                <div>
                    <img src="/img/cafeMal.png" alt="Non!" style={{ filter: 'saturate(50%)' }}/>
                    <p>Non!</p>
                </div>
            </div>
        </div>
    );
}

export default Tableau;