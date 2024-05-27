import { useState, useEffect } from 'react'
import Navbar from './componentes/NavBar'
import './css/input.css'
import Encabezado from './componentes/Encabezado';
import Character from './componentes/Character';
import SectionTwo from './componentes/SectionTwo';


//  CODIGO


fetch("https://rickandmortyapi.com/api/character")
.then(response => response.json())
.catch(error => console.error("Ocurrio el siguiente error" + error ))



export default function App() {


  const [character, setCharacter] = useState([])

  const initialUrl = "https://rickandmortyapi.com/api/character"

  const fetchCharacters = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => setCharacter(data.results))
    .catch(error => console.error("Ocurrio el siguiente error" + error ))
  };

  useEffect(() => {
    fetchCharacters(initialUrl);
  }, [])



  return (
    <>
      <Navbar />
      <Encabezado title="The Rick and Morty API" />
      <SectionTwo>
        <Character characters={character} />
      </SectionTwo>
    </>
    
  );
}