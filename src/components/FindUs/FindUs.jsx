import { MoreInfo } from "../index";
import watch from "../../assets/balckwatch.png";

const FindUs = () => {
  return (
    <section>
      <MoreInfo
        heading="made to attract you!"
        info="  Lorem ipsum dolor sit, amet consectetur adipisicing elit 
    eum id  sunt magnam vero laboriosam, debitis maiores quae"
        firstBtn="Find Us"
        secondBtn="Our Stores"
        img={watch}
      />
    </section>
  );
};

export default FindUs;
