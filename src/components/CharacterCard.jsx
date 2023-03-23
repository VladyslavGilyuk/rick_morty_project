import React from "react";
import "../styles/CharacterCard.css"

const CharacterCard = ({character}) => {
  return (
    <div className="character">
    
      <img src={character.image} alt={character.name} />
      <div className="text-section">
        <h6 className="name">{character.name}</h6>
        <p className="species">{character.species}</p>
      </div>
     
    </div>
  )
}

export default CharacterCard