// Write your Character component here
import styled from 'styled-components';

const CharacterCard = styled.div`
    border-radius: 8px solid red;
    /* src: ${props => props.src ? props.image : 'inherit'}; */
    background-color: white;
    width: 100px;
    height: 200px;
`;



export default CharacterCard