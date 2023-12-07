/* eslint-disable no-unused-vars */
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import appleWatch from "../../Data/data";
import { Slide } from "../index";
import { Section, Container, SliderBtns, SliderArrow } from "./ImgSliderStyles";

const ImgSlider = () => {
  return (
    <Section>
      <Container>
        <Swiper {...sliderSettings}>
          <SliderButtons />
          {appleWatch.map((watch, index) => {
            const { title, img, url } = watch;

            return (
              <SwiperSlide key={index}>
                <Slide {...watch} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </Section>
  );
};

export default ImgSlider;

const SliderButtons = () => {
  const swiper = useSwiper();

  return (
    <SliderBtns>
      <SliderArrow onClick={() => swiper.slidePrev()}>&lt;</SliderArrow>
      <SliderArrow onClick={() => swiper.slideNext()}>&gt;</SliderArrow>
    </SliderBtns>
  );
};

const sliderSettings = {
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    480: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
};
