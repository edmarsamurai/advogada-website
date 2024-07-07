// src/components/Portfolio.js
import React from 'react';
import styled from 'styled-components';
import porOne from './assets/por-01.jpg'
import porTwo from './assets/por-02.jpg'

const PortfolioSection = styled.section`
  padding: 50px 20px;
  background-color: #f7f7f7;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
`;

const PortfolioContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const PortfolioItem = styled.div`
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

const PortfolioImage = styled.img`
  width: 100%;
  border-radius: 10px;
`;

const PortfolioDescription = styled.p`
  font-size: 1rem;
  color: #777;
  margin: 20px;
  text-align: justify;
`;

const Portfolio = () => {
  return (
    <PortfolioSection id="portfolio">
      <SectionTitle>Portfólio</SectionTitle>
      <PortfolioContainer>
        <PortfolioItem>
          <PortfolioImage src={porOne} alt="Projeto 1" />
          <PortfolioDescription>A advogada xxxxx recentemente concluiu um projeto de alta relevância envolvendo um processo de defesa de direitos trabalhistas para um grupo de empregados de uma grande empresa de manufatura. O caso se destacou pela complexidade das questões envolvidas, incluindo a violação de direitos fundamentais dos trabalhadores, como o não pagamento de horas extras, férias e adicionais de insalubridade.

            XXXX foi procurada por um grupo de dez trabalhadores que haviam tentado resolver as questões diretamente com a empresa, sem sucesso. A advogada iniciou o processo com uma detalhada análise dos contratos de trabalho, registros de ponto e demais documentos fornecidos pelos trabalhadores. Durante a fase de investigação preliminar, ela descobriu que a empresa estava manipulando os registros de ponto eletrônico para evitar o pagamento de horas extras.

            Com base nas evidências coletadas, XXXXX elaborou uma petição inicial robusta, destacando todas as violações cometidas pela empresa. No decorrer do processo, ela realizou diversas audiências, onde apresentou testemunhas e peritos para corroborar as alegações dos empregados. Além disso, a advogada utilizou estratégias jurídicas inovadoras para demonstrar a sistematicidade das violações e a má-fé da empresa.

            Um dos pontos altos do caso foi a perícia técnica, na qual um especialista confirmou a manipulação dos registros de ponto, fortalecendo ainda mais a posição dos trabalhadores. XXXX também se destacou pela habilidade de negociação, conseguindo um acordo vantajoso para os empregados antes do julgamento final. A empresa concordou em pagar todas as horas extras devidas, corrigidas monetariamente, além de uma indenização por danos morais e a regularização imediata das condições de trabalho.

            Este projeto exemplifica a dedicação e competência de XXXXXX na defesa dos direitos dos trabalhadores. Sua abordagem minuciosa e comprometida resultou não apenas em uma vitória jurídica, mas também em uma significativa melhora nas condições de trabalho para seus clientes. Este caso consolidou ainda mais a reputação de XXXX como uma advogada trabalhista de excelência, sempre pronta para lutar pelos direitos de seus clientes com determinação e ética.

          </PortfolioDescription>
        </PortfolioItem>
        <PortfolioItem>
          <PortfolioImage src={porTwo} alt="Projeto 2" />
          <PortfolioDescription>A advogada XXXXX recentemente finalizou um projeto de grande importância envolvendo um processo de defesa de um cliente acusado de crime ambiental. O caso ganhou notoriedade devido à magnitude das acusações, que envolviam a suposta contaminação de um rio por uma empresa de pequeno porte especializada em produtos químicos.

            O cliente, proprietário da empresa, foi acusado de despejar resíduos tóxicos no rio local, causando danos ao ecossistema e colocando em risco a saúde da comunidade. Desde o início, Ana percebeu que as evidências apresentadas pela acusação eram insuficientes e repletas de inconsistências. Com seu olhar atento e habilidades investigativas, ela começou uma análise meticulosa de todos os documentos, laudos técnicos e depoimentos envolvidos no caso.

            XXXXX contratou especialistas independentes para realizar novas análises ambientais e comprovar que os resíduos encontrados no rio não correspondiam aos produtos químicos produzidos pela empresa de seu cliente. Durante o processo, ela também destacou a ausência de provas concretas que ligassem diretamente a empresa ao suposto crime ambiental.

            Em cada audiência, XXXX apresentou de forma clara e precisa os resultados das novas perícias, questionando as conclusões precipitadas da acusação. Além disso, ela reuniu depoimentos de moradores locais e funcionários da empresa que atestavam o comprometimento do cliente com práticas sustentáveis e o correto descarte de resíduos industriais.

            A estratégia de defesa foi amplamente baseada na desconstrução das alegações do Ministério Público, evidenciando falhas nos procedimentos de investigação inicial e apontando para possíveis fontes alternativas de contaminação do rio. XXXX também trouxe à tona a questão da responsabilidade compartilhada, sugerindo que outras indústrias na região poderiam estar contribuindo para o problema ambiental.

            O ponto culminante do caso foi a apresentação de um relatório detalhado, elaborado por uma equipe de cientistas ambientais, que exonerou a empresa de qualquer envolvimento na contaminação do rio. O relatório, aceito pelo tribunal, foi crucial para a absolvição do cliente.

            Este projeto demonstrou a capacidade de XXXXXX em lidar com casos complexos, utilizando uma abordagem científica e jurídica rigorosa para defender os direitos de seus clientes. Sua dedicação em buscar a verdade e a justiça resultou na completa exonerção de seu cliente e reforçou sua reputação como uma advogada comprometida com a defesa do meio ambiente e dos direitos individuais.</PortfolioDescription>
        </PortfolioItem>
        {/* Adicione mais itens de portfólio conforme necessário */}
      </PortfolioContainer>
    </PortfolioSection>
  );
};

export default Portfolio;
