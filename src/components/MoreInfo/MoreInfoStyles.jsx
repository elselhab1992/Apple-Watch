import styled from "styled-components";
import Buttons from "../Button/ButtonStyles";

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 2rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1.5rem;
  width: 40%;
`;

const BtnConrainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
`;

const Button = styled(Buttons)`
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary};
`;

export { Section, BtnConrainer, Button, Container };
