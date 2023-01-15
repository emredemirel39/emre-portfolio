import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { ISliderContent } from "../constants";

interface IProps {
  sliderContent: Array<ISliderContent>;
  height: number;
}

const SkillsSlider: FC<IProps> = ({ sliderContent, height }) => {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className={"text-white cursor-grab"}
        pagination={{ clickable: false }}
        navigation={true}
        modules={[Navigation]}
        breakpoints={{
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {sliderContent.map((content, i) => (
          <SwiperSlide
            className="mySwiper skills-swiper text-white flex flex-col justify-end items-center h-80 gap-4 lg:gap-8"
            key={`${content.label}-${i}`}
          >
            <img
              src={require(`../assets/images/${content.imgFile}`)}
              alt={`${content.label}-logo`}
              key={`${content.label}-logo`}
              width={240}
              height={320}
            />
            <h6 className="text-2xl">{content.label}</h6>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SkillsSlider;
