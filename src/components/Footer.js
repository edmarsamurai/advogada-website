// src/components/Footer.js
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #333;
  padding: 20px;
  text-align: center;
  color: white;
`;

const FooterLinks = styled.div`
  margin-bottom: 10px;
`;

const FooterLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  transition: color 0.3s;

  &:hover {
    color: #ffcc00;
  }
`;

const FooterText = styled.p`
  font-size: 0.9rem;
  color: #aaa;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinks>
        <FooterLink href="https://facebook.com" target="_blank">Facebook</FooterLink>
        <FooterLink href="https://instagram.com" target="_blank">Instagram</FooterLink>
        <FooterLink href="https://linkedin.com" target="_blank">LinkedIn</FooterLink>
        <FooterLink href="/privacy-policy">Política de Privacidade</FooterLink>
        <FooterLink href="/terms-of-use">Termos de Uso</FooterLink>
      </FooterLinks>
      <FooterText>&copy; 2024 Escritório de Advocacia. Todos os direitos reservados.</FooterText>
    </FooterContainer>
  );
};

export default Footer;
