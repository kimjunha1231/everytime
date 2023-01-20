import styled from "styled-components";

import { useNavigate } from "react-router-dom";
import React, { useRef, useState } from 'react';




const Box = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Title = styled.div`
    
`;
const Content = styled.div`
    width: 96%;
`;

const WritingButton = styled.div`
    overflow: hidden;
    border-radius: 50px;
    border: 1px solid #d3d3d3;
    width: 30%;
    position: fixed;
    bottom: 30px;
    margin: 0 auto;
    left: 0;
    right: 0;
    
`;


const Test = styled.div`
    width: 50%;
    border: 1px solid #d3d3d3;
`;

const FreeBoardList = () => {
    const navigate = useNavigate();

    return (
        <>
            <Box>
                <Test onClick={() => navigate("/Test")} >작43성완료</Test>
            </Box>
            <WritingButton onClick={() => navigate("/Board/FreeBoard/Writing")}>글쓰기</WritingButton>
        </>
    );

}

export default FreeBoardList;