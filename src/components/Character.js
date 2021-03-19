import React, { useState } from 'react';
import styled from 'styled-components'
import {open, close} from '../Constants/index'

const StyleDiv = styled.div`
    color : #FFE81F;
    border: solid 1px blue;
    background-color: rgba(0,0,0, 0.63);
    margin: 1rem;
    padding: 1rem;
    &:hover{
        background:url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80');
        
    }
    .main-panel{
        display: flex;
        justify-content: space-between;
        font-weight: bold;
        font-size: 2rem;
    }
    .details{
        display:flex;
        flex-direction:column;
        
        align-items:flex-start;
    }
    .button{
        border-radius: 25%;
        background-color:#FFE81F;
    }
    .hide{
        display:none;
    }
`
export default function Character({data}) {
    const [active, setActive] = useState("false")

    const openClose = () => {
        setActive(!active);
    }

    return(
        <StyleDiv>
            <div className = 'main-panel'>
                <div>{data.name}</div>
                <div>
                    <button onClick ={openClose} className = {`${active ? 'button' : 'button hide'}`}>{open}</button>
                    <button onClick ={openClose} className = {`${active ? 'button hide' : 'button'}`}>{close}</button>
                </div> 
            </div>
            <div className = {`${active ? 'details hide' : 'details'}`}>
                <div>Birth Year: {data.birth_year}</div>
                <div>Gender: {data.gender}</div>
                <div>Height: {data.height}</div>
                <div>Mass: {data.mass}</div>
                <div>Hair Color: {data.hair_color}</div>
                <div>Eye Color: {data.eye_color}</div>
            </div>
        </StyleDiv>
    )
}


