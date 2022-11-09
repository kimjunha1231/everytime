import React, { useState } from "react";
import styled from "styled-components";
import { SlickIcons } from '../../path/Resources';



const Slick = styled.img`
  width:100%;
  height: 500px;
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





