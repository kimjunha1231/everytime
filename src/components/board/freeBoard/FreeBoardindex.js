import React, { useRef } from "react";
import { useSetRecoilState } from "recoil";
import { etcstate, FreeBoardNav } from "./FreeBoardNav";
import styled from "styled-components";

const Back = styled.div`
`;

const FreeBoard = () => {
    const close = useSetRecoilState(etcstate);
    const etcRef = useRef();
    const closeEtc = e => {
        if (etcRef.current === e.target) {
            close(false)
        }
    }
    return (
        <Back ref={etcRef} onClick={closeEtc}>
            <FreeBoardNav />
        </Back>

    );

}
export default FreeBoard;