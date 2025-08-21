import styled from 'styled-components'

export const SocialNav = styled.nav`
  margin-top: var(--spacing-xl);
`

export const SocialList = styled.ul`
  display: flex;
  gap: var(--spacing-lg);
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`

export const SocialItem = styled.li``

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  padding: var(--spacing-sm);
  border-radius: var(--radius-full);
  background-color: var(--color-bg-alt);
  transition: all var(--transition-normal);
  border: 2px solid transparent;

  &:hover {
    background-color: var(--color-border);
    transform: translateY(-2px);
    box-shadow: var(--shadow-md);
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  img {
    width: 32px;
    height: 32px;
  }
`
