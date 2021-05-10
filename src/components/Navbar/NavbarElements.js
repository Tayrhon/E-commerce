import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: transparent;
  font-size: 18px;
  display: flex;
  justify-content: space-between;
  padding-top: 28px;
  padding-bottom: 28px;
  z-index: 10;
  max-width: 1240px;
  margin-right: auto;
  margin-left: auto;
  `;

export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1.5rem;
  cursor: pointer;
  &:hover {
    color: #bebdd4;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: inline-block;
  align-items: center;
  margin-right: 24px;
  padding : 3px;
  border-radius: 80px;
  background-image: linear-gradient(65deg, #edb8ff, #6148ff);

  font-weight: 700;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
display: block;
  background: #0f0823;
  border-radius: 80px;
  padding: 24px 40px;
  font-size: 16px;
  line-height: 18px;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:after {
    color: #010606;
  }
`;