import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src='../../images/logo.png' alt='logo' />
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