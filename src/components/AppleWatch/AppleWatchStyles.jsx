import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 0;
`;

const Heading = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const Links = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

const Link = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  color: ${(props) => props.theme.colors.blue};
`;

export { Section, Heading, Links, Link };
