// src/components/Contact.js
import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 50px 20px;
  background-color: #eaeaea;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const TextArea = styled.textarea`
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const SubmitButton = styled.button`
  padding: 10px;
  font-size: 1rem;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <SectionTitle>Entre em Contato</SectionTitle>
      <ContactForm>
        <Input type="text" placeholder="Nome" required />
        <Input type="email" placeholder="Email" required />
        <TextArea rows="5" placeholder="Mensagem" required />
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
