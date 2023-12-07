import watch from "../../assets/adbanner.png";
import {
  Section,
  Heading,
  Input,
  InputContainer,
  ImgContainer,
  Img,
} from "./UpdatedStyles";
import Button from "../Button/Button";

const Updated = () => {
  return (
    <Section>
      <ImgContainer>
        <Img src={watch} alt="watch" width={1900} />
      </ImgContainer>
      <div>
        <Heading>stay updated</Heading>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit eum id sunt
          <br />
          magnam vero laboriosam, debitis maiores quae
        </p>
      </div>
      <InputContainer>
        <Input type="text" id="email" name="email" placeholder="Email ..." />
        <Button>Subscribe</Button>
      </InputContainer>
    </Section>
  );
};

export default Updated;
