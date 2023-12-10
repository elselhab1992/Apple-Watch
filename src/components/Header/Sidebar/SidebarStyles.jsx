import styled from "styled-components";

const SideBar = styled.ul`
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: ${(props) => (props.menu ? "80px" : "-100%")};
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 3rem;
  background-color: ${(props) => props.theme.colors.secondary};
  padding-top: 5rem;
  transition: 700ms;

  @media (min-width: 1025px) {
    display: none;
  }
`;

const MobileLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-weight: bolder;
`;

export { SideBar, MobileLink };
