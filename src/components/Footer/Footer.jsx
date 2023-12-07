import { FooterSection, FooterContainer } from "./FooterStyles";

const Footer = () => {
  return (
    <FooterSection>
      <FooterContainer>
        <ul>
          <li>FAQ</li>
          <li>privacy</li>
          <li>about</li>
          <li>contact</li>
        </ul>
        <ul>
          <li>Legal</li>
          <li>jobs</li>
          <li>help</li>
          <li>media</li>
        </ul>
        <ul>
          <li>account</li>
          <li>terms</li>
          <li>support</li>
          <li>information</li>
        </ul>
      </FooterContainer>
      <p>copyright@apple2023</p>
    </FooterSection>
  );
};

export default Footer;
