/* eslint-disable react/prop-types */
import { FaAngleDoubleRight } from "react-icons/fa";

import { Container, Imgs, Links, LinksContainer, Info } from "./SlideStyles";

const Slide = ({ title, img, url, info }) => {
  return (
    <Container>
      <Imgs src={img} alt="title" />
      <Info>
        <h4>{title}</h4>
        <p>{info}</p>
      </Info>
      <LinksContainer>
        <Links href="#">{url}</Links>
        <FaAngleDoubleRight size={18} />
      </LinksContainer>
    </Container>
  );
};

export default Slide;
