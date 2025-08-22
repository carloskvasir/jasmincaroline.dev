import React, { useState } from 'react';
import { ContactWrapper, ContactSection } from '../../styles/Contact.styles';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Usar fetch para enviar para o Netlify
    const form = e.target;
    const formData = new FormData(form);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        setSubmitted(true);
        setIsSubmitting(false);
        form.reset();
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitted(false);
        }, 5000);
      })
      .catch((error) => {
        console.error('Erro ao enviar formulário:', error);
        setIsSubmitting(false);
        alert('Erro ao enviar mensagem. Tente novamente.');
      });
  };

  return (
    <ContactWrapper id="contact">
      <ContactSection>
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
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            {/* Campo hidden obrigatório para o Netlify */}
            <input type="hidden" name="form-name" value="contact" />
            
            {/* Campo honeypot para proteção contra spam */}
            <p style={{ display: 'none' }}>
              <label>
                Don't fill this out if you're human: 
                <input name="bot-field" />
              </label>
            </p>
            
            <label>
              Nome
              <input 
                type="text" 
                name="nome" 
                placeholder="Seu nome completo"
                required 
                disabled={isSubmitting}
              />
            </label>
            
            <label>
              Email
              <input 
                type="email" 
                name="email" 
                placeholder="seu.email@exemplo.com"
                required 
                disabled={isSubmitting}
              />
            </label>
            
            <label>
              Mensagem
              <textarea 
                name="mensagem" 
                rows={5} 
                placeholder="Digite sua mensagem aqui..."
                required 
                disabled={isSubmitting}
              />
            </label>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
            </button>
          </form>
        )}
      </ContactSection>
    </ContactWrapper>
  );
};

export default Contact;
