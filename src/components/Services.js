// src/components/Services.js
import React from 'react';
import styled from 'styled-components';

const ServicesSection = styled.section`
  padding: 50px 20px;
  background-color: #eaeaea;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const ServicesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const ServiceCard = styled.div`
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

const ServiceTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const ServiceDescription = styled.p`
  font-size: 1rem;
  color: #666;
`;

const Services = () => {
  return (
    <ServicesSection id="services">
      <SectionTitle>Serviços</SectionTitle>
      <ServicesContainer>
        <ServiceCard>
          <ServiceTitle>Consultoria Jurídica</ServiceTitle>
          <ServiceDescription>Oferecemos consultoria jurídica em diversas áreas do direito.</ServiceDescription>
        </ServiceCard>
        <ServiceCard>
          <ServiceTitle>Representação Legal</ServiceTitle>
          <ServiceDescription>Nossos advogados estão prontos para representar você em processos judiciais.</ServiceDescription>
        </ServiceCard>
        {/* Adicione mais serviços conforme necessário */}
      </ServicesContainer>
    </ServicesSection>
  );
};

export default Services;
