import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" ,borderRadius:"50%"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "orange" ,borderRadius:"50%"
    
}}
      onClick={onClick}
    />
  );
}
const SliderBanner = () => {
  const settings = {
    infinite: true,
    speed: 500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="container  md:mx-auto mx-0 mt-10">
      <div className="slider-container">
        <Slider {...settings}>
          <div>
            <Image
              src={"/images/banner1.jpg"}
              width={10000}
              height={200}
              alt="banner1"
            />
          </div>
          <div>
            <Image
              src={"/images/banner2.jpg"}
              width={10000}
              height={200}
              alt="banner1"
            />
          </div>
          <div>
            <Image
              src={"/images/banner3.png"}
              width={10000}
              height={300}
              alt="banner1"
            />
          </div>
          <div>
            <Image
              src={"/images/banner4.jpg"}
              width={10000}
              height={200}
              alt="banner1"
            />
          </div>
          <div>
            <Image
              src={"/images/banner5.png"}
              width={10000}
              height={200}
              alt="banner1"
            />
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default SliderBanner;
