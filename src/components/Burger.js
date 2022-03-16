import React, { useState } from 'react';
import RightNav from './RightNav';
import styled from 'styled-components';
import enedis from '../assets/enedis.png';

const StyledBurger = styled.div`
    width: 2rem;
    height: 2rem;
    position: fixed;
    bottom: 15px;
    right: 20px;
    z-index:20;
    display:none;
    @media (max-width: 768px) {
        display: flex;
        justify-content: space-around;
        flex-flow: column nowrap;
    }
    
div{
    width: 2rem; 
    height: 0.25rem; 
    background-color: ${({ open }) => (open ? '#96cd32' : '#96cd32')}; 
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    
    &:nth-child(1) {
        transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')}; 
    }
    &:nth-child(2) {
        transform: ${({ open }) =>
          open ? 'translate(100%)' : 'translateX(0)'};
        opacity:${({ open }) => (open ? 0 : 1)};
    }
    &:nth-child(3) {
        transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')}; 
    }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
      {/* <img className='logoEnedis' src={enedis} alt='logo' /> */}
      <RightNav open={open} />
    </>
  );
};

export default Burger;
