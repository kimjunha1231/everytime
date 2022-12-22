import React from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { nameState } from "../../profile/NickName";
import Moment from "react-moment";
import { useNavigate } from "react-router-dom";

const Box = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Title = styled.div`
    width: 96%;
`;
const Content = styled.div`
    width: 96%;
`;
const Time = styled.div`
    
`;
const NickName = styled.div`
   border-bottom: solid 1.2px #d3d3d3 ;
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


const FreeBoardList = () => {
    const name = useRecoilValue(nameState);
    const navigate = useNavigate();
    const nowTime = Date.now(),
        startTime = new Date("2020-08-23T16:00");

    return (
        <>
            <Box>
                <Title>결석 1-2번 하면</Title>
                <Content>힘든가용</Content>
                <Moment fromNow>{startTime}</Moment>
                <NickName>{name}</NickName>
            </Box>
            <WritingButton onClick={() => navigate("/Board/FreeBoard/Writing")}>글쓰기</WritingButton>
        </>
    );
};

export default FreeBoardList;