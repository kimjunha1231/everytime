import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SlickBox = styled.div`
  background-color: red;
  border-radius: 20px;
  border: solid 5px #f1f1f1;
  margin-right: 10px;
`;
const SlickTitle = styled.div`
  font-size: 10px;

`;
const SlickContents = styled.div`
  font-size: 5px;
  color: yellow;

`;
const Slick = styled.div`

`;

function CardSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    initialSlide: 0,
  
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };
 
  return (
    <Slick>
      <Slider {...settings}>
        <SlickBox >
          <SlickTitle>고양이 짤 올릴 때 꿀팁</SlickTitle>
          <SlickContents>사진,동영상 넣고 설명 추가하기!</SlickContents>
        </SlickBox>
        <SlickBox>
          <SlickTitle>오늘의 할일</SlickTitle>
          <SlickContents>10월 24일(월)</SlickContents>
        </SlickBox>
        <SlickBox>
          <SlickTitle>내일의 할일</SlickTitle>
          <SlickContents>10월 24일(월)</SlickContents>
        </SlickBox>
        <SlickBox>
          <SlickTitle>어제의 할일</SlickTitle>
          <SlickContents>10월 24일(월)</SlickContents>
        </SlickBox>
      </Slider>
    </Slick>
  );
}

export default CardSlider;


