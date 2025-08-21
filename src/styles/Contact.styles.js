import styled from 'styled-components';

export const ContactSection = styled.section`
  max-width: 480px;
  margin: 0 auto;
  padding: 48px 24px 64px 24px;
  background: var(--color-bg-alt, #f9f9fb);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(50, 50, 93, 0.07);
  margin-top: 64px;
  margin-bottom: 0;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: var(--color-primary, #3182ce);
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  label {
    font-weight: 500;
    color: var(--color-text, #22223b);
    margin-bottom: 0.25rem;
  }

  input,
  textarea {
    padding: 12px 14px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 1rem;
    background: #fff;
    color: #22223b;
    transition: border 0.2s;
    resize: none;
  }

  input:focus,
  textarea:focus {
    border-color: var(--color-primary, #3182ce);
    outline: none;
  }

  button[type='submit'] {
    background: var(--color-primary, #3182ce);
    color: #fff;
    border: none;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 8px;
    transition: background 0.2s;
  }

  button[type='submit']:hover {
    background: #225ea8;
  }

  .success-message {
    color: var(--color-success, #38a169);
    font-weight: 600;
    text-align: center;
    margin-top: 2rem;
  }
`;
