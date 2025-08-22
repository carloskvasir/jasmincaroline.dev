import styled from 'styled-components'

export const AboutSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  padding-top: calc(var(--spacing-3xl) + 80px); /* Compensar navbar fixo */
  padding-bottom: var(--spacing-3xl); /* Garantir espaçamento inferior */
  margin-top: -80px; /* Offset negativo para manter espaçamento visual */
  background-color: var(--color-bg-alt);
  text-align: center;
  width: 100%;
  overflow: hidden; /* Evitar conteúdo vazando */
  box-sizing: border-box;
  
  /* Adicionar scroll-margin-top como fallback */
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
    padding-top: calc(var(--spacing-2xl) + 80px);
    padding-bottom: var(--spacing-2xl);
    margin-top: -80px;
  }
  
  @media (max-width: 480px) {
    padding: var(--spacing-xl) var(--spacing-sm);
    padding-top: calc(var(--spacing-xl) + 80px);
    padding-bottom: var(--spacing-xl);
    margin-top: -80px;
  }
`

export const AboutTitle = styled.h2`
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-2xl);
  color: var(--color-primary);
  word-wrap: break-word;
  overflow-wrap: break-word;
  max-width: 100%;

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
    margin-bottom: var(--spacing-xl);
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-2xl);
    margin-bottom: var(--spacing-lg);
  }
`

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-md);
  box-sizing: border-box;
  width: 100%;
  
  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0 var(--spacing-sm);
  }
`

export const AboutText = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);
  word-wrap: break-word;
  overflow-wrap: break-word;
  hyphens: auto;
  max-width: 100%;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
    line-height: 1.7;
  }
  
  @media (max-width: 480px) {
    font-size: var(--font-size-sm);
    line-height: 1.8;
  }
`
