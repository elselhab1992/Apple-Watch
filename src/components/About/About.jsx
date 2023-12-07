import { MoreInfo } from "../index";
import watch from "../../assets/about.png";

const About = () => {
  return (
    <section>
      <MoreInfo
        heading="made to attract you!"
        info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit 
        eum id  sunt magnam vero laboriosam, debitis maiores quae"
        firstBtn="More Info"
        secondBtn="Buy Now"
        img={watch}
      />
    </section>
  );
};

export default About;
