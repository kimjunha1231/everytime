import React from "react";
import styled from "styled-components";
import { SlickIcons } from '../../path/Resources';



const Slick = styled.img`
  width:100%;
  margin-top: 70px;
  height: 300px;
  display:flex;
`;


const CardSlider = () => {

    return (
      <Slick
      src={SlickIcons.slick}
      alt="슬릭"
  />
    );
};

export default CardSlider;





