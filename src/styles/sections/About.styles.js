import styled from 'styled-components'

export const AboutSection = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  background-color: var(--color-bg-alt);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
`

export const AboutTitle = styled.h2`
  font-size: var(--font-size-4xl);
  margin-bottom: var(--spacing-2xl);
  color: var(--color-primary);

  @media (max-width: 768px) {
    font-size: var(--font-size-3xl);
  }
`

export const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const AboutText = styled.p`
  font-size: var(--font-size-lg);
  line-height: 1.6;
  color: var(--color-text-light);
  margin-bottom: var(--spacing-lg);

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`
