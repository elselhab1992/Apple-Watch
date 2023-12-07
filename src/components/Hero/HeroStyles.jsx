import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  text-align: center;
  padding-top: 1rem;
  width: 100%;
  height: 100vh;

  @media (min-width: 300px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.larger};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.larger};
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

const Info = styled.p`
  font-size: ${(props) => props.theme.fontSizes.primary};
  margin-bottom: 1rem;

  @media (min-width: 300px) {
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

const HeroImg = styled.div`
  width: 600px;

  @media (min-width: 300px) {
    width: 100%;
    padding: 0 1rem;
  }

  @media (min-width: 768px) {
    width: 80%;
  }

  @media (min-width: 1200px) {
    width: 600px;
  }
`;

const Img = styled.img`
  width: 100%;
`;

export { Section, Heading, Info, HeroImg, Img };
