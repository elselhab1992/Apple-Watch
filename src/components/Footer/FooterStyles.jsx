import styled from "styled-components";

const FooterSection = styled.footer`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 3rem 0;
  text-align: center;
`;

const FooterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  margin-bottom: 1.5rem;
`;

export { FooterSection, FooterContainer };
