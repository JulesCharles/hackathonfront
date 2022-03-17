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
import enedis from '../assets/enedis.png';
import deNoir from '../assets/deNoir.png';

import User from './User';

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 845px) {
    flex-flow: column nowrap;
    background-color: #fff;
    position: fixed;
    transform: ${({ open }) => (open ? 'translateY(0%)' : 'translateY(90%)')};
    transition: transform 0.3s ease-in-out;
    bottom: -1%;
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
        <img className='logo' src={enedis} alt='logo' />

        <img className='navbarImg' src={deNoir} alt='de' />
      </div>

      <div className='linkNavbar'>
        <NavLink to='/'>
          <li className='navbarText'>
            <img className='NavbarImg' src={home} alt='maison' />
            Home
          </li>
        </NavLink>
        <NavLink to='/quizz'>
          <li className='navbarText'>
            <img className='navbarImg' src={de} alt='de' />
            Quizz
          </li>
        </NavLink>
        <NavLink to='/fonda'>
          <li className='navbarText'>
            <img className='navbarImg' src={livre} alt='livre' />
            Fondamentaux
          </li>
        </NavLink>
        {/* 
        <NavLink to='/moncompte'>
          <li className='navbarText'>
            <img className='navbarImg' src={compte} alt='écrou' />
            Mon compte
          </li>
        </NavLink> */}
        <NavLink to='/monavis'>
          <li className='navbarText'>
            <img className='navbarImg' src={feedback} alt='feedback' />
            Mon avis
          </li>
        </NavLink>
      </div>
      <div className='avatarWrap'>
        <User />
      </div>
    </Ul>
  );
};
export default RightNav;
