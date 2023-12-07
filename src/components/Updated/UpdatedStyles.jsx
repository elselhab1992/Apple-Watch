import styled from "styled-components";

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 2rem 0;
`;

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const InputContainer = styled.div`
  border: 1px solid #949191;
  border-radius: 5px;
  width: 20%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem;
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  padding-left: 1rem;
`;

export { Section, Heading, BtnContainer, Input, InputContainer };
