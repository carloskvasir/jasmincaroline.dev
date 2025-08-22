import React from 'react'
import {
  AboutSection,
  AboutTitle,
  AboutContent,
  AboutText,
} from '../styles/Home.styles'

const About = () => (
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
)

export default About
