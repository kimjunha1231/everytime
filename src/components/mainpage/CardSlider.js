import React, { useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from "styled-components";

function CardSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="CardSlider">
      <Slider {...settings}>
       <SlickBox>
          <SlickList>안녕</SlickList>
          <SlickList>나는</SlickList>
        </SlickBox>
      </Slider>
    </div>
  );
}

export default CardSlider;

const SlickBox = styled.div`
  display:flex;
  background-color: #d0ecf1;
  justify-content:space-between;

`;
const SlickList = styled.div`
  display:flex;
`;