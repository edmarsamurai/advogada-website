// src/components/FAQ.js
import React, { useState } from 'react';
import styled from 'styled-components';

const FAQSection = styled.section`
  padding: 50px 20px;
  background-color: #f7f7f7;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Question = styled.div`
  background-color: #eaeaea;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #ddd;
  }
`;

const Answer = styled.div`
  background-color: #fff;
  padding: 15px;
  border-radius: 5px;
  margin-bottom: 10px;
  display: ${props => (props.isOpen ? 'block' : 'none')};
  transition: all 0.3s ease-in-out;
`;

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <FAQSection id="faq">
      <SectionTitle>Perguntas Frequentes</SectionTitle>
      <FAQContainer>
        {[
          { question: 'Como posso marcar uma consulta?', answer: 'Você pode marcar uma consulta entrando em contato conosco pelo formulário de contato ou ligando para nosso escritório.' },
          { question: 'Quais são as formas de pagamento aceitas?', answer: 'Aceitamos pagamentos em dinheiro, cartão de crédito e transferência bancária.' },
          { question: 'Qual a especialidade principal do escritório?', answer: 'Nosso escritório é especializado em direito civil e trabalhista.' },
          // Adicione mais perguntas e respostas conforme necessário
        ].map((faq, index) => (
          <div key={index}>
            <Question onClick={() => toggleAnswer(index)}>{faq.question}</Question>
            <Answer isOpen={openIndex === index}>{faq.answer}</Answer>
          </div>
        ))}
      </FAQContainer>
    </FAQSection>
  );
};

export default FAQ;
