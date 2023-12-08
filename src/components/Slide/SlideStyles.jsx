import styled from "styled-components";

const Imgs = styled.img`
  width: 220px;
  height: 300px;
  object-fit: contain;

  @media (min-width: 300px) {
  }

  @media (min-width: 1600px) {
  }
`;

const Container = styled.div`
  width: 400px;
  height: 500px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 300px) {
    width: 100%;
  }

  @media (min-width: 768px) {
  }

  @media (min-width: 1024px) {
  }

  @media (min-width: 1200px) {
  }
`;

const LinksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  color: ${(props) => props.theme.colors.blue};
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const Links = styled.a`
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  color: ${(props) => props.theme.colors.blue};
`;

export { Container, Imgs, Links, LinksContainer, Info };
