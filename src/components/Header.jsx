import React from 'react';
import { HeaderContainer, Nav, Logo, NavList, NavItem, NavLink } from '../styles/Header.styles';

const Header = () => (
  <HeaderContainer>
    <Nav>
      <Logo>Jasmin Caroline</Logo>
      
      <NavList>
        <NavItem>
          <NavLink href="#hero">Início</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#about">Sobre</NavLink>
        </NavItem>
      </NavList>
    </Nav>
  </HeaderContainer>
);

export default Header;
