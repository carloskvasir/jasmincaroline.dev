import React from 'react'
import Header from './Header'
import { PageContainer, MainContent, Footer } from '../styles/Home.styles'

const Layout = ({ children }) => (
  <PageContainer>
    <Header />
    <MainContent>
      {children}
    </MainContent>
    <Footer>
      <p>&copy; 2025 Jasmin Caroline. Feito com ❤️ e React.</p>
    </Footer>
  </PageContainer>
)

export default Layout
