// src/components/Hero.js
import React from 'react';
import styled, { keyframes } from 'styled-components';
import heroImage from './assets/hero-background.jpg'; // Certifique-se de que a imagem está no caminho correto

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const HeroSection = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${heroImage});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  position: relative;
`;

const HeroOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
`;

const HeroContent = styled.div`
  position: relative;
  color: white;
  text-align: center;
  padding: 20px;
  animation: ${fadeIn} 2s ease-in-out;
`;

const HeroTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  animation: ${fadeIn} 3s ease-in-out;
`;

const HeroSubtitle = styled.h2`
  font-size: 1.5rem;
  animation: ${fadeIn} 4s ease-in-out;
`;

const Hero = () => {
  return (
    <HeroSection id="hero">
      <HeroOverlay />
      <HeroContent>
        <HeroTitle>Bem-vindo ao Escritório de Advocacia</HeroTitle>
        <HeroSubtitle>Defendendo seus direitos com excelência</HeroSubtitle>
      </HeroContent>
    </HeroSection>
  );
};

export default Hero;
