// Write your Character component here
import React from 'react';
import styled from 'styled-components';

const CharacterCard = styled.div`
    border-radius: 8px solid red;
    /* src: ${props => props.src ? props.image : 'inherit'}; */
    background-color: white;
    width: 300px;
    height: 200px;
`;

const CharacterImage = styled.img`
    src: ${props => props.src ? props.src : 'inherit'};
    margin: 10px auto;
    max-width: 100%;
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