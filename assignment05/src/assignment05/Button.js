import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
width: 17vw;
height: 8vh;
font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
font-size: 1.5vw;
background-color:  ${(props)=>(props.theme === "white"? "white":"blue")};
margin: auto;
outline: none;
border: none;
color: ${(props)=> (props.color=="black"?"black":(props.color=="blue")?"blue":"white")};
font-weight: 550;
margin-top: ${(props)=>(props.margintop=="less"?"4vh":"36vh")};
margin-left: ${(props)=>(props.margin=="less" ?"3vw":"20vw")};
border: ${(props)=>(props.border==="yes"?"0.1vh solid #cecece" : (props.border==="dot")?"0.1vh dashed #cecece":(props.border=="no")?"none" :"0.1vh solid trasparant")};
border-radius: 0.3vw;

&:hover
{
  background-color: blueviolet;
  color:white;
}

`

const Navbar = styled.div`
width: 100%;
height: 7vh;
background-color: red;
h1{
    font-size: 2vw;
    font-family: cursive;
    text-align: center;
    color: white;
    font-weight: 700;
    margin-top: 0;
  }


` 

export {Button,Navbar};