import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './styles/RightNav.css';
import compte from '../assets/compte.png';
import de from '../assets/de.png';
import feedback from '../assets/feedback.png';
import livre from '../assets/livre.png';
import home from '../assets/home.png';
import avatar from '../assets/avatar.png';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(170%)')};
    transition: transform 0.3s ease-in-out;
    bottom: 0%;
    left: 0%;
    height: 100%;
    width: 100%;
    border-radius: 24px;
    li {
      color: var(--fontColor);
      font-size: 24px;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <div className='navbarWrap'>
        <NavLink to='/'>
          <li classname='navbarText'>
            <img classname='navbarImg' src={home} alt='maison' />
            Home
          </li>
        </NavLink>
      </div>
      <div className='navbarWrap'>
        <NavLink to='/quizz'>
          <li classname='navbarText'>
            <img classname='navbarImg' src={de} alt='de' />
            Quizz
          </li>
        </NavLink>
      </div>
      <div className='navbarWrap'>
        <NavLink to='/fondamentaux'>
          <img classname='navbarImg' src={livre} alt='livre' />
          <li classname='navbarText'>Fondamentaux</li>
        </NavLink>
      </div>
      <div className='navbarWrap'>
        <NavLink to='/moncompte'>
          <img classname='navbarImg' src={compte} alt='écrou' />
          <li classname='navbarText'>Mon compte</li>
        </NavLink>
      </div>
      <div className='navbarWrap'>
        <NavLink to='/monavis'>
          <img classname='navbarImg' src={feedback} alt='feedback' />
          <li classname='navbarText'>Mon avis</li>
        </NavLink>
      </div>
      <div className='avatarWrap'>
        <img classname='avatarImg' src={avatar} alt='photo' />
        <p className='nameAvatart'>Olivia Olivier</p>
      </div>
    </Ul>
  );
};
export default RightNav;
