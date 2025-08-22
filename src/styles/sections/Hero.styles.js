import styled, { keyframes } from 'styled-components'

// Keyframes para animações
const float = keyframes`
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
`

const fadeInScale = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0px);
  }
`

const glow = keyframes`
  0%, 100% {
    box-shadow: 
      var(--shadow-xl),
      0 0 0 2px var(--color-border),
      0 0 20px rgba(59, 130, 246, 0.1);
  }
  50% {
    box-shadow: 
      var(--shadow-xl),
      0 0 0 2px var(--color-border),
      0 0 30px rgba(59, 130, 246, 0.2);
  }
`

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const slideInLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInRight = keyframes`
  0% {
    opacity: 0;
    transform: translateX(50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`

const slideInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  text-align: center;
  
  /* Adicionar scroll-margin-top para compatibilidade */
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
`

export const ProfileFigure = styled.figure`
  margin-bottom: var(--spacing-2xl);
  position: relative;
  
  /* Animação de entrada */
  animation: ${fadeInScale} 1s ease-out;
  
  /* Animação de flutuação contínua */
  animation: ${fadeInScale} 1s ease-out, ${float} 4s ease-in-out infinite 1s;
  
  /* Container para efeitos de borda */
  &::before {
    content: '';
    position: absolute;
    top: -8px;
    left: -8px;
    right: -8px;
    bottom: -8px;
    border-radius: 50%;
    background: linear-gradient(
      45deg,
      var(--color-accent),
      var(--color-primary),
      #ff6b6b,
      var(--color-accent)
    );
    background-size: 300% 300%;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
    animation: ${rotate} 8s linear infinite;
  }
  
  &:hover::before {
    opacity: 0.3;
  }
`

export const ProfileImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: var(--radius-full);
  object-fit: cover;
  border: 4px solid var(--color-bg);
  box-shadow:
    var(--shadow-xl),
    0 0 0 2px var(--color-border);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  cursor: pointer;
  
  /* Animação sutil de brilho */
  animation: ${glow} 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.08) rotate(2deg);
    box-shadow:
      var(--shadow-xl),
      0 0 0 4px var(--color-accent),
      0 0 40px rgba(59, 130, 246, 0.3);
    filter: brightness(1.1) contrast(1.05);
  }

  /* Efeito de anel pulsante */
  &::after {
    content: '';
    position: absolute;
    top: -12px;
    left: -12px;
    right: -12px;
    bottom: -12px;
    border-radius: 50%;
    border: 2px solid var(--color-accent);
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.3s ease;
  }

  &:hover::after {
    opacity: 0.6;
    transform: scale(1);
    animation: ${float} 2s ease-in-out infinite;
  }

  /* Otimização de performance */
  will-change: transform, box-shadow, filter;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
    
    &:hover {
      transform: scale(1.05) rotate(1deg);
    }
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
    
    &:hover {
      transform: scale(1.03);
    }
  }

  /* Reduzir animações para usuários que preferem menos movimento */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    
    &:hover {
      transform: scale(1.02);
    }
    
    &::after,
    &:hover::after {
      animation: none;
    }
  }
`

export const HeroTitleGroup = styled.hgroup`
  margin-bottom: var(--spacing-2xl);
  animation: ${slideInLeft} 0.8s ease-out 0.5s both;
`

export const HeroTitle = styled.h1`
  font-size: var(--font-size-5xl);
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--color-primary);
  font-weight: 700;
  animation: ${slideInLeft} 0.8s ease-out 0.7s both;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`

export const HeroSubtitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 400;
  color: var(--color-text-light);
  margin: 0;
  animation: ${slideInRight} 0.8s ease-out 0.9s both;

  @media (max-width: 768px) {
    font-size: var(--font-size-xl);
  }
`

export const HeroDescription = styled.p`
  max-width: 600px;
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-text);
  margin: 0 0 var(--spacing-2xl) 0;
  animation: ${slideInUp} 0.8s ease-out 1.1s both;

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
  
  /* Reduzir animações para usuários que preferem menos movimento */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`
