import React, { useState } from "react";
import styled from "styled-components";
import { navIcons } from '../../path/Resources'
import NickName from "./NickName";
import { useNavigate } from "react-router-dom";

const InfoBox = styled.div`
    margin-top: 70px;
    border-radius: 20px;
    border: 1.2px solid #d3d3d3;
    padding: 15px;
    display: flex;
    align-items: center;
`;

const PersonIcon = styled.img`
    width: 60px;
`;
const InfoContent = styled.div`
`;

const InfoId = styled.div`
    font-size: 13px;
    font-weight: 500;
`;
const InfoName = styled.div`
    font-size: 11px;
    color: #dbdbdb;
    font-weight: bold;
    margin-top: 3px;
`;

const ProfileBox = styled.div`
    border-radius: 20px;
    border: 1.2px solid #d3d3d3;
    margin-top:10px;
    padding: 30px 20px 30px 20px;
`;

const Title = styled.div`
    font-size: 20px;
    font-weight: bold;
`;

const Content = styled.div`
    font-size: 15px;
    font-weight: 400;
    margin-top: 30px;
`;



const Info = () => {
    let navigate = useNavigate();
    return (
        <>
            <InfoBox>
                <PersonIcon src={navIcons.person} alt="프로필"></PersonIcon>
                <InfoContent>
                    <InfoId>
                        cht8949css 재사용
                    </InfoId>
                    <InfoName>
                        김준하 / {NickName.username}
                    </InfoName>
                    <InfoName>
                        숭실대20학번
                    </InfoName>
                </InfoContent>
            </InfoBox>
            <ProfileBox>
                <Title>계정</Title>
                <Content>학교 인증</Content>
                <Content>비밀번호 변경</Content>
                <Content>이메일 변경</Content>
            </ProfileBox>
            <ProfileBox>
                <Title>커뮤니티</Title>
                <Content  onClick = {()=>navigate("/profile/NickNameChange")}>닉네임 설정</Content>
                <Content>프로필 이미지 변경</Content>
                <Content>이용 제한 내역</Content>
                <Content>쪽지 설정</Content>
                <Content>커뮤니티 이용규칙</Content>
              
            </ProfileBox>
        </>
    );
}

export default Info;