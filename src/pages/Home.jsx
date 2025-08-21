import React from 'react'
import Header from '../components/Header'
import SocialLinks from '../components/SocialLinks'
import OptimizedImage from '../components/OptimizedImage'
import SEOProvider from '../components/SEOProvider'
import profileImage from '../assets/image.png'
import {
  PageContainer,
  MainContent,
  HeroSection,
  ProfileFigure,
  HeroTitleGroup,
  HeroTitle,
  HeroSubtitle,
  HeroDescription,
  AboutSection,
  AboutTitle,
  AboutContent,
  AboutText,
  Footer,
} from '../styles/Home.styles'

const Home = () => (
  <SEOProvider
    seoProps={{
      title: 'Jasmin Caroline - Desenvolvedora Frontend | Portfolio React',
      description:
        'Conheça Jasmin Caroline, desenvolvedora frontend apaixonada por React, JavaScript e tecnologias modernas. Veja meu portfolio e entre em contato!',
      keywords:
        'jasmin caroline, portfolio frontend, react developer, javascript, html5, css3, desenvolvedora web, UI/UX, programadora',
    }}
  >
    <PageContainer>
      <Header />

      <MainContent>
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

        <AboutSection id='about'>
          <AboutTitle>Sobre Mim</AboutTitle>
          <AboutContent>
            <AboutText>
              Estudante dedicada e entusiasta do desenvolvimento frontend,
              sempre em busca de aprender novas tecnologias e metodologias para
              criar interfaces modernas e acessíveis.
            </AboutText>
            <AboutText>
              Focada em React, JavaScript, HTML5 semântico e CSS moderno, com
              paixão por UX/UI e acessibilidade web.
            </AboutText>
          </AboutContent>
        </AboutSection>
      </MainContent>

      <Footer>
        <p>&copy; 2025 Jasmin Caroline. Feito com ❤️ e React.</p>
      </Footer>
    </PageContainer>
  </SEOProvider>
)

export default Home
