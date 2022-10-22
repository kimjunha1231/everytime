import React, { useState } from "react";
import * as A from "./Accordion.style";
import styled from "styled-components";

const StupidAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <A.Wrapper>
      <A.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
        I'm stupid Accordion 2222zzz
      </A.HeaderWrapper>
      <RBodyWrapper isOpen={isOpen}>Body</RBodyWrapper>
    </A.Wrapper>
  );
};

export default StupidAccordion;

const RBodyWrapper = styled(A.BodyWrapper)`
  background-color: red;
`;
