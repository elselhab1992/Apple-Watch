/* eslint-disable react/prop-types */
import { Section, Button, BtnConrainer, Container } from "./MoreInfoStyles";

const MoreInfo = ({ heading, info, firstBtn, secondBtn, img }) => {
  return (
    <Section>
      <img src={img} alt="watch" width={200} />
      <Container>
        <h2>{heading}</h2>
        <p>{info}</p>
        <BtnConrainer>
          <Button>{firstBtn}</Button>
          <Button>{secondBtn}</Button>
        </BtnConrainer>
      </Container>
    </Section>
  );
};

export default MoreInfo;
