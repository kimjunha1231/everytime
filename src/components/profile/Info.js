import React from "react";
import styled from "styled-components";
import { navIcons } from '../../path/Resources'

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


const Info = () => {
    return (
        <InfoBox>
            <PersonIcon src={navIcons.person} alt="프로필"></PersonIcon>
            <InfoContent>
                <InfoId>
                    cht8949
                </InfoId>
                <InfoName>
                    김준하 / 쑹씨리
                </InfoName>
                <InfoName>
                    숭실대20학번
                </InfoName>
            </InfoContent>
        </InfoBox>

    );
}

export default Info;