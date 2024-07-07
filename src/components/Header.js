import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';

const HeaderContainer = styled.header`
  background-color: #333;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 1.5rem;
  color: white;
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${props => (props.isOpen ? '0' : '-100%')};
    background-color: #333;
    width: 100%;
    transition: left 0.3s ease-in-out;
  }
`;

const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

const MenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem;
  transition: color 0.3s;
  cursor: pointer;

  &:hover {
    color: #ffcc00;
  }
`;

const Hamburger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Bar = styled.div`
  height: 3px;
  width: 25px;
  background-color: white;
  margin: 4px 0;
  transition: 0.4s;
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeaderContainer>
      <Nav>
        <Logo>Advogada</Logo>
        <Hamburger onClick={toggleMenu}>
          <Bar style={{ transform: isOpen ? 'rotate(-45deg) translate(-5px, 6px)' : 'rotate(0)' }} />
          <Bar style={{ opacity: isOpen ? '0' : '1' }} />
          <Bar style={{ transform: isOpen ? 'rotate(45deg) translate(-5px, -6px)' : 'rotate(0)' }} />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuItem>
            <MenuLink to="hero" smooth={true} duration={500} onClick={toggleMenu}>Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="about" smooth={true} duration={500} onClick={toggleMenu}>Sobre Nós</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="services" smooth={true} duration={500} onClick={toggleMenu}>Serviços</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="portfolio" smooth={true} duration={500} onClick={toggleMenu}>Portfólio</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="testimonials" smooth={true} duration={500} onClick={toggleMenu}>Depoimentos</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="faq" smooth={true} duration={500} onClick={toggleMenu}>FAQ</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="contact" smooth={true} duration={500} onClick={toggleMenu}>Contato</MenuLink>
          </MenuItem>
        </Menu>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
