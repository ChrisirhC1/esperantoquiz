
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Bouton = ({ ia }) => {

    const [textePrank] = useState(<p>😂🤣😂  <br/>  Il a cru que y'avait une IA</p>);
    const [showPrank, setShowPrank] = useState(false);

    return (

        <>
            {!ia ? (
                <Link to={`/game?ia=${ia}`}>
                    <Button variant="primary" size="lg" className="btn-square">
                        {ia ? "Joueur vs IA" : "Joueur vs Joueur"}
                    </Button>
                </Link>
            ) : (

                <Button variant="primary" size="lg" className="btn-square" onClick={() => setShowPrank(true)}>
                    {showPrank ? textePrank :  ia ? "Joueur vs IA" : "Joueur vs Joueur"}
                </Button>

            )}

        </>
    );
}

export default Bouton;