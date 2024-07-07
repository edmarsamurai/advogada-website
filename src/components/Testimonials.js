// src/components/Testimonials.js
import React from 'react';
import styled from 'styled-components';

const TestimonialsSection = styled.section`
  padding: 50px 20px;
  background-color: #eaeaea;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const TestimonialsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const TestimonialCard = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-10px);
  }

  @media (max-width: 768px) {
    width: 100%;
  }

  @media (min-width: 769px) {
    width: 45%;
  }
`;

const TestimonialText = styled.p`
  font-size: 1rem;
  color: #666;
  margin-bottom: 10px;
`;

const TestimonialAuthor = styled.p`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

const Testimonials = () => {
  return (
    <TestimonialsSection id="testimonials">
      <SectionTitle>Depoimentos</SectionTitle>
      <TestimonialsContainer>
        <TestimonialCard>
          <TestimonialText>Excelente atendimento e profissionalismo.</TestimonialText>
          <TestimonialAuthor>Cliente 1</TestimonialAuthor>
        </TestimonialCard>
        <TestimonialCard>
          <TestimonialText>Serviço rápido e eficiente, recomendo.</TestimonialText>
          <TestimonialAuthor>Cliente 2</TestimonialAuthor>
        </TestimonialCard>
        {/* Adicione mais depoimentos conforme necessário */}
      </TestimonialsContainer>
    </TestimonialsSection>
  );
};

export default Testimonials;
