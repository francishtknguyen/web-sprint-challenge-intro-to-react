import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import {BASE_URL} from './Constants/index'
import Character from './components/Character'
import styled from 'styled-components'

const StyleDiv = styled.div`
    color : #FFE81F;
    font-weight: bold;
    background-color: black;
    padding: 5%;
    margin: 5%;
    h1{
      font-family: 'News Gothic';
      -webkit-text-stroke: 2px #FFE81F;
      font-size: 3rem;
      border: solid 1px #FFE81F;
      &:hover{
        transform:scale(2);
        transition: all 1s ease-out;
      }
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState(null)
  const [dataType, setDataType] = useState(['people'])

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(`${BASE_URL}${dataType}`)
    .then(res => {
      console.log(res.data);
      setData(res.data);
    })
    .catch(err => {
      console.log(err)
    })
  }, [])

  if(!data) return <h1>Loading....</h1>

  return (
    
    <StyleDiv className="App">
      <h1 className="Header">Characters</h1>
      {data.map(element => {
        return <Character key ={element.height} data={element} />
      })}
    </StyleDiv>
  );
}

export default App;
