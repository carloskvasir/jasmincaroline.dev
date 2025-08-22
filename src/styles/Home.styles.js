import styled from 'styled-components'

export const PageContainer = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
`

export const MainContent = styled.main`
  padding-top: 80px;
  width: 100%;
  overflow-x: hidden;
  box-sizing: border-box;
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
