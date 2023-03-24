import React, {useEffect, useState} from "react"
import {useParams, useNavigate} from "react-router-dom"
import "../styles/CharacterInfo.css"
import Arrow from "../images/arrow.png";

const CharacterInfo = () => {
  const [currentCharacter, setCurrentCharacter] = useState("");
  const {id} = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const getData = async() => {
      const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
      const data = await response.json();
      setCurrentCharacter(data)
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

 

  return (
    <>
      <div className="go-back" onClick={() => navigate(-1)}>
        <img src = {Arrow}alt="arrow-img"/>
        <p>Go back</p>
      </div>
    
      <div className="character-info">

        <img src={currentCharacter.image} alt={currentCharacter.name} />
        <p className="name">{currentCharacter.name}</p>
        <h6 className="informations">Informations</h6>

        <p className="subtitle">Gender</p>
        <p className="text">{currentCharacter.gender}</p>
   
        <p className="subtitle">Status</p>
        <p className="text">{currentCharacter.status}</p>
   
        <p className="subtitle">Species</p>
        <p className="text">{currentCharacter.species}</p>
  
        <p className="subtitle">Type</p>
        <p className="text">{currentCharacter.type || "Unknown"}</p>

      </div>
    </>
      
  ) 
    /* doesn't work for some reason
      <p className="subtitle">Origin</p>
      <p className="text">{currentCharacter.origin.name}</p>
    */
}

export default CharacterInfo