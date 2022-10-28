import React from 'react';
import styled from 'styled-components';

const Burger = ({menu, setMenu}) => {
  return (
    <StyledBurger menu={menu} onClick={()=>setMenu(!menu)}>
        <div></div>
        <div></div>
        <div></div>
    </StyledBurger>
  )
}

const StyledBurger = styled.button`
    display: flex; 
    flex-direction: column; 
    justify-content: space-around; 
    width: 1.8rem; 
    height: 1.8rem; 
    background: transparent; 
    border: none; 
    cursor: pointer; 
    padding: 0; 
    z-index: 10; 
    &:focus { outline: none; } 
    div { 
        width: 2rem; 
        height: 0.25rem;
        background: #121212; 
        border-radius: 10px; 
        transition: all 0.3s linear; 
        position: relative; 
        transform-origin: 1px; 
        :first-child { transform: ${({ menu }) => menu ? 'rotate(40deg)' : 'rotate(0)'}; } 
        :nth-child(2) { opacity: ${({ menu }) => menu ? '0' : '1'}; 
        transform: ${({ menu }) => menu ? 'translateX(20px)' : 'translateX(0)'}; } 
        :nth-child(3) { transform: ${({ menu }) => menu ? 'rotate(-40deg)' : 'rotate(0)'}; } }
`
export default Burger