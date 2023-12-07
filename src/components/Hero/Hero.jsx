import { Button } from "../index";
import hero from "../../assets/SmartwatchHome - Copy.png";
import { Section, Heading, Info } from "./HeroStyles";

const Hero = () => {
  return (
    <Section>
      <div>
        <Heading>smartwatch AI 9</Heading>
        <Info>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore id
        </Info>
        <Button>Explore More</Button>
      </div>
      <div>
        <img src={hero} alt="watch" width={600} />
      </div>
    </Section>
  );
};

export default Hero;
