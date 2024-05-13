import React, { useState } from "react";


const PlayerSelect = ({textePrank}) => {
    const playerOptions = [1, 2, 3, 4];
    const [selectedPlayer, setSelectedPlayer] = useState(false);

    return (
        <>
        {!selectedPlayer ? (
            <select className="form-select mb-3" onChange={() => setSelectedPlayer(true)}>
                <option value="">Choisir le nombre de joueurs</option>
                {playerOptions.map((option) => (
                    <option key={option} value={option}>{option}</option>
                ))}
            </select>
        ) : (
            <p>{textePrank}</p>
        )}
        </>
    );
};

export default PlayerSelect;
