import React from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";


const Test = styled.div`
    width: 50%;
    border: 1px solid #d3d3d3;
`;

export const timeState = atom({
    key: 'timeState',
    default: []
});

export const Writing = () => {
    const [nowTime, setNowTime] = useRecoilState(timeState);
    const navigate = useNavigate();
    const onChangeTime = setNowTime(new Date(Date.now()))
    const dateA = new Date(nowTime);
    const dateB = Date.now();
    const diffMSec = dateA.getTime() - dateB.getTime();
    const diffDate = diffMSec / (24 * 60 * 60 * 1000);


    return (
        <>
            <Test onClick={() => navigate("/Board/FreeBoard")} onChange={onChangeTime}>작43성완료</Test>
            <diffDate></diffDate>
        </>
    )
}

