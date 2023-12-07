/* eslint-disable react/prop-types */
import { FaAngleDoubleRight } from "react-icons/fa";

import { Container, Imgs, Links, LinksContainer } from "./SlideStyles";

const Slide = ({ title, img, url }) => {
  return (
    <Container>
      <Imgs src={img} alt="title" />
      <h4>{title}</h4>
      <LinksContainer>
        <Links href="#">{url}</Links>
        <FaAngleDoubleRight size={18} />
      </LinksContainer>
    </Container>
  );
};

export default Slide;
