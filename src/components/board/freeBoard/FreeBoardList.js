import React from "react";
import styled from "styled-components";
import { useRecoilValue } from 'recoil';
import { nameState } from "../../profile/NickName";

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


const FreeBoardList = () => {
    const name = useRecoilValue(nameState)
    return (
        <Box>
            <Title>결석 1-2번 하면</Title>
            <Content>힘든가용</Content>
            <NickName>{name}</NickName>
        </Box>
    );
};

export default FreeBoardList;