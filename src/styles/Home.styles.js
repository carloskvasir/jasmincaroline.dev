import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
`

export const MainContent = styled.main`
  padding-top: 80px;
`

export const HeroSection = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  text-align: center;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
  }
`

export const ProfileFigure = styled.figure`
  margin-bottom: var(--spacing-2xl);
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
  transition: all var(--transition-normal);
  position: relative;

  &:hover {
    transform: scale(1.05);
    box-shadow:
      var(--shadow-xl),
      0 0 0 4px var(--color-accent);
  }

  /* Add a subtle glow effect */
  &::before {
    content: '';
    position: absolute;
    top: -4px;
    left: -4px;
    right: -4px;
    bottom: -4px;
    border-radius: var(--radius-full);
    background: linear-gradient(
      45deg,
      var(--color-accent),
      var(--color-primary)
    );
    z-index: -1;
    opacity: 0;
    transition: opacity var(--transition-normal);
  }

  &:hover::before {
    opacity: 0.1;
  }

  /* Ensure image is properly optimized */
  loading: lazy;
  decoding: async;

  @media (max-width: 768px) {
    width: 150px;
    height: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
    height: 120px;
  }
`

export const HeroTitleGroup = styled.hgroup`
  margin-bottom: var(--spacing-2xl);
`

export const HeroTitle = styled.h1`
  font-size: var(--font-size-5xl);
  margin: 0 0 var(--spacing-sm) 0;
  color: var(--color-primary);
  font-weight: 700;

  @media (max-width: 768px) {
    font-size: var(--font-size-4xl);
  }
`

export const HeroSubtitle = styled.h2`
  font-size: var(--font-size-2xl);
  font-weight: 400;
  color: var(--color-text-light);
  margin: 0;

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

  @media (max-width: 768px) {
    font-size: var(--font-size-base);
  }
`

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

export const Footer = styled.footer`
  background-color: var(--color-primary);
  color: white;
  padding: var(--spacing-2xl);
  text-align: center;

  p {
    margin: 0;
    font-size: var(--font-size-sm);
  }
`
