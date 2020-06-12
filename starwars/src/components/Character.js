// Write your Character component here
import React, { useState, useEffect } from 'react';
import styled from 'styled-components'
// Write your Character component here

const Cards = props => {
    let {data} = props;

    return (
 
       <div>

            { data.map(character => {
                return (

                    <StyledDiv>
                        <StyledCard>

                        <h1>{character.name}</h1>
                        <h2>{character.gender}</h2>
                        <h3>Mug Shot</h3>
                        <StyledImg src={character.image}></StyledImg>

                        </StyledCard>
                    </StyledDiv>

                )

            })}
            
       
       </div>

    )

}

const StyledDiv = styled.div`
flex-direction:column;
 display: flex;
 align-items:center;
`;

const StyledCard = styled.div`
background-color: white;
width: 30%;
margin:1rem;
padding:2%;
border: dotted 2px red;
border-radius:10%;
`;
const StyledImg = styled.img`
border: red solid 2px;
border-radius:20%;
`;
export default Cards