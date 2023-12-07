import styled from "styled-components";
import Buttons from "../Button/ButtonStyles";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem 0;
  text-align: center;
`;

const TopConrainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const Heading = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.medium};
`;

const BottomConrainer = styled.div`
  width: 40%;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
    width: 60%;
  }

  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;
`;

const Button = styled(Buttons)`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.primary};
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};

  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secondary};
  }
`;

export {
  Section,
  TopConrainer,
  BottomConrainer,
  Heading,
  Button,
  BtnContainer,
};
