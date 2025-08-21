import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-bottom: 1px solid var(--color-border);
  z-index: 1000;
  padding: var(--spacing-md) 0;
  transition: all var(--transition-normal);
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);

  @media (max-width: 768px) {
    padding: 0 var(--spacing-md);
  }
`

export const Logo = styled.h1`
  font-size: var(--font-size-xl);
  font-weight: 600;
  color: var(--color-primary);
  margin: 0;
`

export const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: var(--spacing-xl);
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    gap: var(--spacing-lg);
  }
`

export const NavItem = styled.li``

export const NavLink = styled.a`
  color: var(--color-text-light);
  font-weight: 500;
  transition: color var(--transition-fast);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-md);

  &:hover {
    color: var(--color-primary);
    background-color: var(--color-bg-alt);
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }
`
