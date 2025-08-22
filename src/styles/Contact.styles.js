import styled from 'styled-components';

export const ContactWrapper = styled.section`
  padding: var(--spacing-3xl) var(--spacing-xl);
  padding-top: calc(var(--spacing-3xl) + 80px); /* Compensar navbar fixo */
  margin-top: -80px; /* Offset negativo para manter espaçamento visual */
  background-color: var(--color-bg);
  
  /* Adicionar scroll-margin-top como fallback */
  scroll-margin-top: 100px;

  @media (max-width: 768px) {
    padding: var(--spacing-2xl) var(--spacing-md);
    padding-top: calc(var(--spacing-2xl) + 80px);
    margin-top: -80px;
  }
`;

export const ContactSection = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 48px 24px;
  background: var(--color-bg-alt, #f9f9fb);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(50, 50, 93, 0.07);
  border: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    padding: 32px 20px;
    border-radius: 12px;
  }

  h2 {
    font-size: 2.25rem;
    margin-bottom: 2rem;
    color: var(--color-primary, #3182ce);
    text-align: center;
    font-weight: 700;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, var(--color-primary, #3182ce), #63b3ed);
      border-radius: 2px;
    }

    @media (max-width: 768px) {
      font-size: 1.875rem;
      margin-bottom: 1.5rem;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 2rem;
  }

  label {
    display: flex;
    flex-direction: column;
    font-weight: 600;
    color: var(--color-text, #22223b);
    font-size: 0.95rem;
    letter-spacing: 0.025em;
  }

  input,
  textarea {
    margin-top: 8px;
    padding: 14px 16px;
    border: 2px solid #e2e8f0;
    border-radius: 10px;
    font-size: 1rem;
    background: #fff;
    color: #22223b;
    transition: all 0.3s ease;
    resize: vertical;
    font-family: inherit;

    &::placeholder {
      color: #a0aec0;
      font-style: italic;
    }

    &:focus {
      border-color: var(--color-primary, #3182ce);
      outline: none;
      box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
      transform: translateY(-1px);
    }

    &:hover {
      border-color: #cbd5e0;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  button[type='submit'] {
    background: linear-gradient(135deg, var(--color-primary, #3182ce), #2c5aa0);
    color: #fff;
    border: none;
    border-radius: 10px;
    padding: 16px 0;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    margin-top: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
      transition: left 0.5s;
    }

    &:hover {
      background: linear-gradient(135deg, #2c5aa0, #1e3a8a);
      transform: translateY(-2px);
      box-shadow: 0 8px 25px rgba(49, 130, 206, 0.3);

      &::before {
        left: 100%;
      }
    }

    &:active {
      transform: translateY(0);
    }

    @media (max-width: 768px) {
      font-size: 1rem;
      padding: 14px 0;
    }
  }

  .success-message {
    color: var(--color-success, #38a169);
    font-weight: 600;
    text-align: center;
    font-size: 1.1rem;
    padding: 24px;
    background: rgba(56, 161, 105, 0.1);
    border-radius: 10px;
    border: 2px solid rgba(56, 161, 105, 0.3);
    margin-top: 1rem;
    animation: slideIn 0.5s ease-out;
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
