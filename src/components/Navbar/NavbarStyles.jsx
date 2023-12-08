import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  margin: 0;
  z-index: 999;
  padding: 1rem 4rem;
  border-bottom: 1px solid #ccc;
  background-color: ${(props) => props.theme.colors.secondary};

  @media (max-width: 1024px) {
    padding: 1rem 2rem;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileLinks = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: ${(props) => props.theme.colors.secondary};
  gap: 3rem;
  position: absolute;
  top: 80px;
  right: 0;
  width: 100%;
  height: 100vh;
  z-index: 1;
  padding: 3rem 0;
  opacity: ${(props) => (props.menu ? "100%" : "0")};
  transition: 700ms;
  top: ${(props) => (props.menu ? "0" : "-100%")};

  @media (min-width: 1024px) {
    display: none;
  }
`;

const NavLink = styled.a`
  color: ${(props) => props.theme.colors.primary};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-weight: ${(props) => props.theme.fontWeights.bold};
  transition: 700ms;

  &:hover {
    cursor: pointer;
    color: #524c4c;
  }
`;

const Search = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3rem;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const Input = styled.input`
  padding: 7px;
`;

const MenuIcons = styled.div`
  z-index: 999;
  @media (min-width: 1024px) {
    display: none;
  }
`;

export { Header, NavLinks, NavLink, Search, Input, MobileLinks, MenuIcons };
