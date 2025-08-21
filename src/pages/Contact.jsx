import React, { useState } from 'react';
import { ContactSection } from '../styles/Contact.styles';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <ContactSection id="contato">
      <h2>Contato</h2>
      {submitted ? (
        <div className="success-message">Mensagem enviada com sucesso! Obrigado pelo contato.</div>
      ) : (
        <form 
          name="contato" 
          method="POST" 
          data-netlify="true" 
          onSubmit={() => setSubmitted(true)}
        >
          <input type="hidden" name="form-name" value="contato" />
          <label>
            Nome
            <input type="text" name="nome" required />
          </label>
          <label>
            Email
            <input type="email" name="email" required />
          </label>
          <label>
            Mensagem
            <textarea name="mensagem" rows={5} required />
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
    </ContactSection>
  );
};

export default Contact;
