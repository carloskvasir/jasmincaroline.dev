import React, { useState } from 'react';
import { ContactSection as StyledContactSection } from '../../styles/Contact.styles';

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    
    // Reset form after showing success message
    setTimeout(() => {
      setSubmitted(false);
      e.target.reset();
    }, 3000);
  };

  return (
    <StyledContactSection id="contact">
      <h2>Contato</h2>
      {submitted ? (
        <div className="success-message">
          Mensagem enviada com sucesso! Obrigado pelo contato.
        </div>
      ) : (
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true" 
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          
          <label>
            Nome
            <input 
              type="text" 
              name="nome" 
              placeholder="Seu nome completo"
              required 
            />
          </label>
          
          <label>
            Email
            <input 
              type="email" 
              name="email" 
              placeholder="seu.email@exemplo.com"
              required 
            />
          </label>
          
          <label>
            Mensagem
            <textarea 
              name="mensagem" 
              rows={5} 
              placeholder="Digite sua mensagem aqui..."
              required 
            />
          </label>
          
          <button type="submit">Enviar Mensagem</button>
        </form>
      )}
    </StyledContactSection>
  );
};

export default ContactSection;
