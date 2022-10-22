import React, { useState } from "react";
import * as A from "./Accordion.style";

const SmartAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <A.Wrapper>
      <A.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
        I'm stupid Accordion 2222dd
      </A.HeaderWrapper>
      <A.BodyWrapper isOpen={isOpen}>Body</A.BodyWrapper>
    </A.Wrapper>
  );
};

export default SmartAccordion;
