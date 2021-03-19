import React from 'react';
import styled from 'styled-components'

const StyleDiv = styled.div`
    color : #FFE81F;
    border: solid 1px blue;
    font-weight: bold;
    background-color: black;
    margin: 1rem;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`
export default function Character({data}) {

    return(
        <StyleDiv>
           <div>{data.name}</div>
           <div>Birth Year: {data.birth_year}</div>
           <div>Mass: {data.mass}</div>
        </StyleDiv>
    )
}
