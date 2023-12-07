import styled from "styled-components";
import img from "../../assets/advertise.png";
import Buttons from "../Button/ButtonStyles";

const Section = styled.section`
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  padding: 0 10rem;
`;

const Container = styled.div`
  background-image: url(${img});
  background-repeat: no-repeat;
  background-position: right;
  background-size: contain;
  background-position-x: right;
  height: 350px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
  text-align: center;
  margin-bottom: 1rem;
`;

const Button = styled(Buttons)`
  background-color: transparent;
  color: ${(props) => props.theme.colors.secondary};
  box-shadow: 0 0 0 2px ${(props) => props.theme.colors.secondary};

  &:hover {
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export { Section, Container, Heading, Button };
