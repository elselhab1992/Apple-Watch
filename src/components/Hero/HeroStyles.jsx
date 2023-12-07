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
`;

const Heading = styled.h1`
  font-size: ${(props) => props.theme.fontSizes.larger};
`;

const Info = styled.p`
  font-size: ${(props) => props.theme.fontSizes.primary};
  margin-bottom: 1rem;
`;

export { Section, Heading, Info };
