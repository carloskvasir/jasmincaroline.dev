import React, { useEffect } from 'react'
import { setupSmoothScrollLinks, handleInitialHash } from '../utils/smoothScroll'
import {
  HeaderContainer,
  Nav,
  Logo,
  NavList,
  NavItem,
  NavLink,
} from '../styles/Header.styles'

const Header = () => {
  useEffect(() => {
    // Configurar scroll suave para os links de navegação
    setupSmoothScrollLinks();
    
    // Verificar se há hash na URL e fazer scroll para a seção correspondente
    handleInitialHash();
  }, []);

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Jasmin Caroline</Logo>

        <NavList>
          <NavItem>
            <NavLink href='#hero'>Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href='#about'>Sobre</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contato</NavLink>
          </NavItem>
        </NavList>
      </Nav>
    </HeaderContainer>
  )
}

export default Header
