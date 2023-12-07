import styled from "styled-components";

const Buttons = styled.button`
  width: 130px;
  padding: 10px;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  border-radius: 5px;
  border: 0;
  transition: 700ms;

  &:hover {
    box-shadow: 0 0 0 2px ${(props) => props.theme.colors.primary};
    background-color: ${(props) => props.theme.colors.secondary};
    color: ${(props) => props.theme.colors.primary};
    cursor: pointer;
  }
`;

export default Buttons;
