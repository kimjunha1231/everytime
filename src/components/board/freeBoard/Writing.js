import React from "react";
import styled from "styled-components";
import { atom } from "recoil";
import Moment from 'react-moment';


const timeState = atom({
    key: 'timeState',
    default: []
});


const Writing = () => {
    const [username, setUsername] = useRecoilState(ｔｉｍｅState);
    const nowTime = Date.now()
        
    return (
        <>
            <div>작성완료</div>
          
        </>
    )
}

export default { Writing, timeState };