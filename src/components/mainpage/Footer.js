import React from "react";
import styled from "styled-components";
import { FooterIcons } from "../../path/Resources";
import { useNavigate } from "react-router-dom";


const FooterBox = styled.div`
    display:flex;
    justify-content:space-around;
    align-items: center;
    position: fixed;
    bottom:0;
    left: 0;
    width:100%;
    background-color: white;
    padding: 20px 0 20px 0;
    border: 1.2px solid #d3d3d3;
`;

const Icon = styled.img`
    width: 20px;
`;

const Footer = () => {
    let navigate = useNavigate();   
    return (
        <FooterBox>
            <Icon onClick = {()=>navigate("/")} src= {FooterIcons.home} alt= "메인"></Icon>
            <Icon src= {FooterIcons.schedule} alt= "시간표"></Icon>
            <Icon onClick = {()=>navigate("/BoardList")} src= {FooterIcons.list} alt= "리스트"></Icon>
            <Icon src= {FooterIcons.bell} alt= "알림"></Icon>
            <Icon src= {FooterIcons.school} alt= "캠퍼스픽"></Icon>
        </FooterBox>
    );
};
export default Footer;
