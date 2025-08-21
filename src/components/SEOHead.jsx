import React, { useEffect } from 'react'

const SEOHead = ({
  title = 'Jasmin Caroline - Desenvolvedora Frontend | React & JavaScript',
  description = 'Jasmin Caroline, futura desenvolvedora frontend especializada em React, JavaScript, HTML5 e CSS3. Apaixonada por criar experiências digitais modernas e acessíveis.',
  keywords = 'desenvolvedora frontend, react developer, javascript, html5, css3, web development, UI/UX, programadora, jasmin caroline',
  url = 'https://jasmincaroline.dev',
  image = 'https://jasmincaroline.dev/jasmin-caroline.png',
  imageAlt = 'Jasmin Caroline - Desenvolvedora Frontend',
  locale = 'pt_BR',
  type = 'website',
}) => {
  useEffect(() => {
    // Função para criar ou atualizar meta tags de forma otimizada
    const updateMetaTags = (tags) => {
      const head = document.head
      tags.forEach(({ property, content, isProperty }) => {
        const selector = isProperty
          ? `meta[property="${property}"]`
          : `meta[name="${property}"]`
        let meta = head.querySelector(selector)

        if (meta) {
          meta.setAttribute('content', content)
        } else {
          meta = document.createElement('meta')
          if (isProperty) {
            meta.setAttribute('property', property)
          } else {
            meta.setAttribute('name', property)
          }
          meta.setAttribute('content', content)
          head.appendChild(meta)
        }
      })
    }

    // Atualizar título da página
    document.title = title

    // Lista de meta tags para atualizar/criar
    const metaTags = [
      // Primary Meta Tags
      { property: 'description', content: description },
      { property: 'keywords', content: keywords },
      { property: 'author', content: 'Jasmin Caroline' },
      { property: 'robots', content: 'index, follow' },

      // Open Graph / Facebook
      { property: 'og:type', content: type, isProperty: true },
      { property: 'og:url', content: url, isProperty: true },
      { property: 'og:title', content: title, isProperty: true },
      { property: 'og:description', content: description, isProperty: true },
      { property: 'og:image', content: image, isProperty: true },
      { property: 'og:image:width', content: '1200', isProperty: true },
      { property: 'og:image:height', content: '630', isProperty: true },
      { property: 'og:image:alt', content: imageAlt, isProperty: true },
      { property: 'og:locale', content: locale, isProperty: true },
      {
        property: 'og:site_name',
        content: 'Jasmin Caroline Portfolio',
        isProperty: true,
      },

      // Twitter
      {
        property: 'twitter:card',
        content: 'summary_large_image',
        isProperty: true,
      },
      { property: 'twitter:url', content: url, isProperty: true },
      { property: 'twitter:title', content: title, isProperty: true },
      { property: 'twitter:description', content: description, isProperty: true },
      { property: 'twitter:image', content: image, isProperty: true },
      { property: 'twitter:image:alt', content: imageAlt, isProperty: true },

      // Additional SEO
      { property: 'theme-color', content: '#3182ce' },
      { property: 'msapplication-TileColor', content: '#3182ce' },
    ]

    updateMetaTags(metaTags)

    // Adicionar structured data (JSON-LD)
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Jasmin Caroline',
      jobTitle: 'Desenvolvedora Frontend',
      description: description,
      url: url,
      image: image,
      sameAs: [
        'https://github.com/jasmincaroline',
        'https://linkedin.com/in/jasmincaroline',
      ],
    }

    let script = document.querySelector('script[type="application/ld+json"]')
    if (script) {
      script.textContent = JSON.stringify(structuredData)
    } else {
      script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }, [title, description, keywords, url, image, imageAlt, locale, type])

  return null
}

export default SEOHead
