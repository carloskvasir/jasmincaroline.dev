import React from 'react'
import OptimizedImage from '../OptimizedImage'
import SocialLinks from '../SocialLinks'
import profileImage from '../../assets/image.png'
import {
  HeroSection,
  ProfileFigure,
  HeroTitleGroup,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
} from '../../styles/sections/Hero.styles'

const Hero = () => (
  <HeroSection id='hero'>
    <ProfileFigure>
      <OptimizedImage
        src={profileImage}
        alt='Jasmin Caroline - Desenvolvedora Frontend especialista em React e JavaScript'
        size='200px'
        mobileSizes={{ md: '150px', sm: '120px' }}
        loading='eager'
        decoding='async'
        rounded={true}
      />
    </ProfileFigure>

    <HeroTitleGroup>
      <HeroTitle>Olá, sou Jasmin Caroline!</HeroTitle>
      <HeroSubtitle>Futura Desenvolvedora Frontend</HeroSubtitle>
    </HeroTitleGroup>

    <HeroDescription>
      Apaixonada por tecnologia, design e desenvolvimento web.
      Transformando ideias em experiências digitais incríveis através do
      código. Em busca do primeiro desafio como desenvolvedora front-end!
    </HeroDescription>

    <SocialLinks />
  </HeroSection>
)

export default Hero
