import React from 'react';
import { SocialNav, SocialList, SocialItem, SocialLink } from '../styles/SocialLinks.styles';

const SocialLinks = () => (
  <SocialNav aria-label="Redes sociais">
    <SocialList>
      <SocialItem>
        <SocialLink 
          href="https://github.com/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil do GitHub de Jasmin Caroline"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" 
            alt="GitHub" 
          />
        </SocialLink>
      </SocialItem>
      <SocialItem>
        <SocialLink 
          href="https://www.linkedin.com/in/jasmincaroline/" 
          target="_blank" 
          rel="noopener noreferrer" 
          aria-label="Perfil do LinkedIn de Jasmin Caroline"
        >
          <img 
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" 
            alt="LinkedIn" 
          />
        </SocialLink>
      </SocialItem>
    </SocialList>
  </SocialNav>
);

export default SocialLinks;
