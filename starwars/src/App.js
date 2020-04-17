import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
// import styled from 'styled-components';

import Character from './components/Character';
import Container from './components/Container';

const base_url = 'https://rickandmortyapi.com/api/';
const characters = 'character';


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterList, setCharacterList] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    console.log('this runs ONLY the first time DOM is updated')
    axios.get(`${base_url}${characters}`)
    .then(res => {
      setCharacterList(res.data.results) // array of 20 characters
      // setCharacterList(characterList.push(res.data.results))
      debugger
    })
    .catch(err => {
      console.log(err)
      debugger
    })
  }, [])

  return (
    <div className='App'>
      <h1 className='Header'>Characters</h1>
      <Container>
        {characterList && console.log(characterList[1].image)}

        {characterList && characterList.forEach(character => console.log(character.name))}

        
          {characterList && characterList.map((character, index) => {
            return <div key={index}><Character src={character.image} name={character.name}></Character></div>
          })}

      </Container>
    </div>
  );
}

export default App;
