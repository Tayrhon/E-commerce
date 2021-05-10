import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';
import logo from '../../images/logo.png'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={logo} style={{width:'150px',height:'60px',}} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/store' activeStyle>
            Store
          </NavLink>
          <NavLink to='/work' activeStyle>
            Work
          </NavLink>
          <NavLink to='/pages' activeStyle>
            Pages
          </NavLink>
          <NavLink to='/card' activeStyle>
            Card
          </NavLink>
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/browsegallery'>Browse gallery</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;