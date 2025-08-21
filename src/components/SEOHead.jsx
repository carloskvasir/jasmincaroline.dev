import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const SEOHead = ({
  title = "Jasmin Caroline - Desenvolvedora Frontend | React & JavaScript",
  description = "Jasmin Caroline, futura desenvolvedora frontend especializada em React, JavaScript, HTML5 e CSS3. Apaixonada por criar experiências digitais modernas e acessíveis.",
  keywords = "desenvolvedora frontend, react developer, javascript, html5, css3, web development, UI/UX, programadora, jasmin caroline",
  url = "https://jasmincaroline.dev",
  image = "https://jasmincaroline.dev/jasmin-caroline.png",
  imageAlt = "Jasmin Caroline - Desenvolvedora Frontend",
  locale = "pt_BR",
  type = "website"
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Jasmin Caroline",
    "jobTitle": "Desenvolvedora Frontend",
    "description": description,
    "url": url,
    "image": image,
    "sameAs": [
      "https://www.linkedin.com/in/jasmincaroline/",
      "https://github.com/jasmincaroline"
    ],
    "knowsAbout": [
      "React",
      "JavaScript", 
      "HTML5",
      "CSS3",
      "Frontend Development",
      "Web Development",
      "UI/UX Design"
    ]
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="Jasmin Caroline" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content="Jasmin Caroline Portfolio" />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
      <meta property="twitter:image:alt" content={imageAlt} />
      
      {/* LinkedIn */}
      <meta property="linkedin:owner" content="jasmincaroline" />
      
      {/* Additional SEO */}
      <meta name="theme-color" content="#3182ce" />
      <meta name="msapplication-TileColor" content="#3182ce" />
      
      {/* Favicon and App Icons */}
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon.svg" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon.svg" />
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon.svg" />
      <link rel="manifest" href="/site.webmanifest" />
      
      {/* Structured Data (JSON-LD) */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      
      {/* Preconnect to external domains for performance */}
      <link rel="preconnect" href="https://cdn.jsdelivr.net" />
      <link rel="preconnect" href="https://images.unsplash.com" />
      
      {/* DNS Prefetch for social media domains */}
      <link rel="dns-prefetch" href="//linkedin.com" />
      <link rel="dns-prefetch" href="//github.com" />
    </Helmet>
  );
};

// Higher Order Component para páginas que precisam de SEO customizado
export const withSEO = (Component, seoProps = {}) => {
  return function SEOWrappedComponent(props) {
    return (
      <HelmetProvider>
        <SEOHead {...seoProps} />
        <Component {...props} />
      </HelmetProvider>
    );
  };
};

export { HelmetProvider };
export default SEOHead;
