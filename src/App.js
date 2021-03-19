import axios from 'axios';
import React, {useState, useEffect} from 'react';
import './App.css';
import {BASE_URL} from './Constants/index'
import Character from './components/Character'
import styled from 'styled-components'

const StyleDiv = styled.div`
    color : #FFE81F;
    font-weight: bold;
    background-color: rgba(0,0,0, 0.63);
    padding: 5%;
    margin:5% 1rem;
    height: 100vh;
    /* opacity:75%; */
    h1{
      font-family: 'Franklin Demi';
      -webkit-text-stroke: 2px #FFE81F;
      font-size: 5rem;
      border: solid 5px #FFE81F;
      border-radius: 8px;
      margin: 5%;
      padding: 2%;
      &:hover{
        transform:scale(1.2);
        transition: all 2s ease-in-out;
        background:url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1370&q=80');
      }
    }
`

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [data, setData] = useState(null)
  //for future use of other types of data from api
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
      <h1 className="Header">STAR WARS Characters</h1>
      {data.map(element => {
        return <Character key ={element.height} data={element} />
      })}
    </StyleDiv>
  );
}

export default App;
