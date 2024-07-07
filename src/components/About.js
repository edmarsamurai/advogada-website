// src/components/About.js
import React from 'react';
import styled, { keyframes } from 'styled-components';

const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const AboutSection = styled.section`
  padding: 50px 20px;
  background-color: #f7f7f7;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #333;
`;

const AboutContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-in-out;
`;

const AboutText = styled.p`
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const About = () => {
  return (
    <AboutSection id="about">
      <SectionTitle>Sobre Nós</SectionTitle>
      <AboutContent>
        <AboutText>
          Somos um escritório de advocacia comprometido com a excelência e a defesa dos direitos de nossos clientes. Nossa equipe de advogados altamente qualificados está pronta para oferecer a melhor assistência jurídica em diversas áreas do direito.
        </AboutText>
        <AboutText>
          Nossa missão é fornecer soluções jurídicas eficazes e personalizadas, sempre com ética e dedicação. Estamos aqui para ajudar você a enfrentar qualquer desafio legal com confiança.
        </AboutText>
      </AboutContent>
    </AboutSection>
  );
};

export default About;
