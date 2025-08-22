import styled, { keyframes } from 'styled-components'

// Animações para o LinkedIn
const linkedinBreathe = keyframes`
  0%, 100% {
    transform: scale(1);
    box-shadow: 0 0 0 0 rgba(0, 119, 181, 0.2);
  }
  50% {
    transform: scale(1.05);
    box-shadow: 0 0 0 8px rgba(0, 119, 181, 0);
  }
`

const linkedinBounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0) rotate(0deg);
  }
  10% {
    transform: translateY(-8px) rotate(-5deg);
  }
  30% {
    transform: translateY(-4px) rotate(3deg);
  }
  60% {
    transform: translateY(-2px) rotate(-2deg);
  }
`

const linkedinRotate = keyframes`
  0% {
    transform: rotate(0deg) scale(1);
  }
  25% {
    transform: rotate(-10deg) scale(1.1);
  }
  50% {
    transform: rotate(10deg) scale(1.15);
  }
  75% {
    transform: rotate(-5deg) scale(1.1);
  }
  100% {
    transform: rotate(0deg) scale(1);
  }
`

const linkedinPulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(49, 130, 206, 0.4);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(49, 130, 206, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(49, 130, 206, 0);
  }
`

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
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  /* Efeito especial para LinkedIn */
  &[aria-label*="LinkedIn"] {
    /* Animação de respiração suave quando idle */
    animation: ${linkedinBreathe} 3s ease-in-out infinite;
    
    &:hover {
      background: linear-gradient(135deg, #0077b5, #005885);
      transform: translateY(-4px);
      box-shadow: 
        var(--shadow-lg),
        0 0 20px rgba(0, 119, 181, 0.3);
      animation: ${linkedinRotate} 0.6s ease-in-out;
      
      img {
        filter: brightness(0) invert(1);
        animation: ${linkedinBounce} 0.8s ease-in-out;
      }
      
      &::before {
        opacity: 1;
        animation: ${linkedinPulse} 1s ease-out;
      }
    }

    /* Efeito de anel pulsante */
    &::before {
      content: '';
      position: absolute;
      top: -2px;
      left: -2px;
      right: -2px;
      bottom: -2px;
      border-radius: 50%;
      background: linear-gradient(45deg, #0077b5, #005885);
      z-index: -1;
      opacity: 0;
      transition: opacity 0.3s ease;
    }
  }

  /* Estilos para GitHub (sem animação especial) */
  &[aria-label*="GitHub"] {
    &:hover {
      background-color: #24292e;
      transform: translateY(-2px) scale(1.05);
      box-shadow: var(--shadow-md);
      
      img {
        filter: brightness(0) invert(1);
      }
    }
  }

  &:focus {
    outline: 2px solid var(--color-accent);
    outline-offset: 2px;
  }

  img {
    width: 32px;
    height: 32px;
    transition: all 0.3s ease;
    will-change: transform, filter;
  }

  /* Reduzir animações para usuários que preferem menos movimento */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &[aria-label*="LinkedIn"] {
      animation: none;
      
      &:hover {
        animation: none;
        
        img {
          animation: none;
        }
        
        &::before {
          animation: none;
        }
      }
    }
  }
`
