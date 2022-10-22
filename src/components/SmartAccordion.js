import React, { useState } from "react";
import * as A from "./Accordion.style";

const SmartAccordion = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <A.Wrapper>
      <A.HeaderWrapper onClick={() => setIsOpen(!isOpen)}>
        형준
      </A.HeaderWrapper>
      <A.BodyWrapper isOpen={isOpen}>좀해</A.BodyWrapper>
    </A.Wrapper>
  );
};

export default SmartAccordion;
