import React, { useRef, useEffect } from "react";
import { useRecoilState } from "recoil";
import { etcstate, FreeBoardNav } from "./FreeBoardNav";
import styled from "styled-components";
import FreeBoardList from "./FreeBoardList";

const Back = styled.div`

`;

const FreeBoard = () => {
    const [close, setclose] = useRecoilState(etcstate);
    useEffect(() => {
        const clickOutside = (e) => {
            if (close && etcRef.current && !etcRef.current.contains(e.target)) {
                setclose(false);
            }
        };

        document.addEventListener("mousedown", clickOutside);

        return () => {
            document.removeEventListener("mousedown", clickOutside);
        };
    },);
    const etcRef = useRef();
    return (
        <Back ref={etcRef}>
            <FreeBoardNav />
            <FreeBoardList />
        </Back>

    );

}
export default FreeBoard;