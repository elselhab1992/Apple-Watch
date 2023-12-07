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

const ImgContainer = styled.div`
  width: 1600px;

  @media (min-width: 300px) {
    width: 100%;
  }
`;

const Img = styled.img`
  width: 100%;
`;

const Heading = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.large};

  @media (min-width: 300px) {
    font-size: ${(props) => props.theme.fontSizes.medium};
  }

  @media (min-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.large};
  }
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

  @media (min-width: 300px) {
    width: 90%;
  }

  @media (min-width: 768px) {
    width: 50%;
  }

  @media (min-width: 1200px) {
    width: 20%;
  }
`;

const Input = styled.input`
  outline: 0;
  border: 0;
  padding-left: 1rem;
`;

export {
  Section,
  Heading,
  BtnContainer,
  Input,
  InputContainer,
  ImgContainer,
  Img,
};
