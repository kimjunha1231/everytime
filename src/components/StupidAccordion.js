import React, { useState } from "react";
import * as A from "./Accordion.style";
import styled from "styled-components";

const StupidAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <A.Wrapper>
      <A.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
        우성아
      </A.HeaderWrapper>
      <RBodyWrapper isOpen={isOpen}>포기해</RBodyWrapper>
    </A.Wrapper>
  );
};

export default StupidAccordion;

const RBodyWrapper = styled(A.BodyWrapper)`
  background-color: red;
`;
