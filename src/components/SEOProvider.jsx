import React from 'react';
import SEOHead from '../components/SEOHead';
import profileImage from '../assets/image.png';

const SEOProvider = ({ children, seoProps = {} }) => {
  // Gera URL absoluta da imagem para meta tags
  const getImageUrl = () => {
    if (typeof window !== 'undefined') {
      return `${window.location.origin}${profileImage}`;
    }
    return `https://jasmincaroline.dev${profileImage}`;
  };

  const defaultSEO = {
    title: "Jasmin Caroline - Desenvolvedora Frontend | React & JavaScript",
    description: "Jasmin Caroline, futura desenvolvedora frontend especializada em React, JavaScript, HTML5 e CSS3. Transformando ideias em experiências digitais incríveis.",
    keywords: "jasmin caroline, desenvolvedora frontend, react developer, javascript, html5, css3, web development, UI/UX, programadora brasil",
    url: "https://jasmincaroline.dev",
    image: "https://jasmincaroline.dev/jasmin-caroline.png",
    imageAlt: "Jasmin Caroline - Desenvolvedora Frontend especialista em React"
  };

  const finalSEOProps = { ...defaultSEO, ...seoProps };

  return (
    <>
      <SEOHead {...finalSEOProps} />
      {children}
    </>
  );
};

export default SEOProvider;
