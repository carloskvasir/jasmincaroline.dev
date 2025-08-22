import React from 'react'
import {
  Layout,
  Hero,
  About,
  ContactSection,
  SEOProvider
} from '../components'

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
    <Layout>
      <Hero />
      <About />
      <ContactSection />
    </Layout>
  </SEOProvider>
)

export default Home
