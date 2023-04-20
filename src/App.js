import './index.css';
import './App.css';
import imageRickMorty from './img/rickmorty1.png';
import credential from './img/credencialalex.png';
import { useState } from 'react';
import Characters from './components/Characters';

function App() {
  const[characters, setCharacters] = useState(null);
  const reqApi = async() => {
    const api = await fetch("https://rickandmortyapi.com/api/character")
    const characterApi = await api.json(); 
    setCharacters(characterApi.results);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2 className="title">Rick & Morty</h2>
        {characters ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ):(
          <>
          <img src={imageRickMorty} alt="Rick & Morty" className='img-home' />
          <button onClick={reqApi} className="btn-search">
          Buscar personajes
           </button>
          </>
        )
        }

        <div className="character-credential">
        <div>
          <img src={credential} alt="Credential" className="img-credential"/>
        </div>
        <div>
          <p>
            <h2 className="texto_credencial">Vladimir Alexander Garcia Ricardez</h2>
          </p>
          <p>
            <h2 className="texto_credencial">S18003199</h2>
          </p>
        </div>
      </div>

      </header>
    </div>
  );
}

export default App;