import React from "react";
import styled from "styled-components";
import { atom, useRecoilState } from "recoil";
import Moment from 'react-moment';
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
    const onChangeTime = setNowTime(Date.now())
    const tt = Date.now()- nowTime;
    return (
        <>
            <Test onClick={()=> navigate("/Board/FreeBoard")} onChange={onChangeTime}>작43성완료</Test>
            <div>{tt}</div>
        </>
    )
}

