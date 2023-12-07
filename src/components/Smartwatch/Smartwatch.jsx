import logo from "../../assets/navbrand.png";
import {
  Section,
  TopConrainer,
  BottomConrainer,
  Heading,
  Button,
  BtnContainer,
} from "./SmartwatchStyles";

const Smartwatch = () => {
  return (
    <Section>
      <div>
        <TopConrainer>
          <img src={logo} alt="logo" width={50} />
          <h3>SMARTWATCH</h3>
        </TopConrainer>
        <Heading>artificial intelligence 9</Heading>
      </div>
      <BottomConrainer>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit eum id sunt
          magnam vero laboriosam, debitis maiores quae
        </p>
        <BtnContainer>
          <Button>Where to buy</Button>
          <Button>Find out more</Button>
        </BtnContainer>
      </BottomConrainer>
    </Section>
  );
};

export default Smartwatch;
