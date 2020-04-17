// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    background-color: white;
    width: 320px;
    height: 400px;
    margin: 10px;
    border-radius: 8px;
    border: 4px solid gold;
`;

const CharacterImage = styled.img`
    margin: 10px auto;
    max-width: 100%;
    border: 4px solid red;
    border-radius: 8px;
`;

const CharacterText = styled.div`
    max-width: 100%;
    color: black;
    font-weight: 800;

    p {
        padding: 10px;
        line-height: 1.2;
    }
`;

const Character = (props) => {
    return (
        <CharacterCard>
            <CharacterImage src={props.src} />
            <CharacterText>{props.name}</CharacterText>
        </CharacterCard>   
    )
}  


export default Character