import React from "react";
import styled from "styled-components";
import { ProfileIcons } from '../../path/Resources'
import { useNavigate } from "react-router-dom";

import { atom,useRecoilState } from 'recoil';


const Nav = styled.div`
    padding: 20px 20px 20px 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`;
const NavTitle = styled.div`
    font-size: 20px;
    font-weight: 400;
`;
const ExitIcon = styled.img`
    height: 15px;
`;
const Nick = styled.div`
    font-size: 15px;
    margin-left: 20px;
    color :#8b8b8b;
`;

const NickChange = styled.input`
    font-size: 18px;
    border-radius: 15px;
    background-color: white;
    outline: none;
    font-weight: bold;
    width: 90%;
    margin: 8px 0 0 20px;
    border: 1.2px solid #d3d3d3;
    padding: 8px 0px 8px 10px;
    ::placeholder {
    color: #d3d3d3;
    font-size: 18px;
}
`;
const NickButton = styled.button`
    background-color: red;
    border: 1px solid black;
    border-radius: 20px;
    outline: none;
    color:white;
    font-size:17px;
    padding: 10px 0;
    width: 90%;
    margin-top: 20px;
    display: flex;
    justify-content: center;
    margin-left: auto; 
    margin-right: auto;
`;

const WarningBox = styled.div`
    display: flex;
    margin:30px 0 0 20px;
    color:#d3d3d3;
    font-size: 14px;
`;
const WarningRed = styled.div`
    color:red;
`;
export const nameState = atom({
    key: 'nameState',
    default: ["주나"]
  });
export const NickName = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useRecoilState(nameState);
    const onChangeName = e => {
        setUsername(e.target.value);
    };
    return (
        <>
            <Nav>
                <NavTitle>닉네임 설정</NavTitle>
                <ExitIcon onClick={() => navigate("/Profile")} src={ProfileIcons.close} alt="나가기"></ExitIcon>
            </Nav>
            <Nick>닉네임</Nick>
            <NickChange
                type="text"
                name="username"
                value={username}
                onChange={onChangeName}
                placeholder="닉네임"
            />
            <WarningBox>
                <div>※ 닉네임을 설정하면 &nbsp;</div>
                <WarningRed>30일간 변경할 수 없습니다.</WarningRed>
            </WarningBox>
            <NickButton 
                onClick={()=>navigate("/Profile")}
            >
                닉네임설정
            </NickButton>
        </>
    );
}

