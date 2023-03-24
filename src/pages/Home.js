import {useEffect, useState} from "react";
import "../styles/Home.css"
import SearchBar from "../images/search_bar.png";
import HeadingRM from "../images/headingR&M.png"
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";
import GoogleLogin from "../components/GoogleLogin";

const API_URL = "https://rickandmortyapi.com/api/character/?name="

const Home = () => {
  const firstCharacters = async(title) => {
    const response = await fetch(`${API_URL}${title}`)
    const data = await response.json();
    return data.results.sort((a, b) => a.name.localeCompare(b.name));
  };

  const [characters, setCharaters] = useState([firstCharacters()]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isload, setLoad] = useState(true);
 
  useEffect(() => {
      const data = window.localStorage.getItem('Characters');
      if (data !== null) setCharaters(JSON.parse(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    window.localStorage.setItem('Characters', JSON.stringify(characters))
   
  }, [characters]);



  useEffect(() => {
    const data = window.localStorage.getItem('Isload');
    if (data !== null) setLoad(JSON.parse(data))
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

useEffect(() => {
  window.localStorage.setItem('Isload', JSON.stringify(isload))
 
}, [isload]);



const searchCharacters = async(title) => {
  const response = await fetch(`${API_URL}${title}`)
  const data = await response.json();
  setCharaters(data.results.sort((a, b) => a.name.localeCompare(b.name)));
};





  // Search on pressed Enter key
  function handleKeyDown(e) {
    if(e.keyCode === 13) { 
      searchCharacters(searchTerm)
      
    }
  }

  return (
    <div className="main">
      <GoogleLogin />

      <img 
        className="heading"
        src = {HeadingRM}
        alt="heading"
        onClick={() => {searchCharacters("")}}
      />

      <div className="search-container">
        <img className="search-bar"
          src = {SearchBar}
          alt="searh-bar"
          onClick={() => {searchCharacters(searchTerm)}}
      />

        <input 
          className="input-search"
          placeholder="Filter by name..."
          value = {searchTerm}
          onKeyDown={handleKeyDown}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
        
      {characters?.length > 0 ? (

        <div className="container">
          {characters.map((character) => (
            <Link to={`/character/${character.id}`}>
              <CharacterCard key={character.id} className="element" character ={character} />
            </Link>))
          }
        </div>
        ) : (
          <div className="empty">
            <h3>No characters were found, please try again</h3>
           </div>
            )
      }      
    </div>
  ); 
}

export default Home;