import React, { useState } from "react";
import styled from "styled-components";
import {navIcons} from '../path/Resources'
const Nav = styled.div`
    display:flex;
    justify-content:space-between;
`;
const NavBox = styled.div`
    
`;
const NavBoxIcon = styled.div`
    display:flex;
    margin:10px;
`;
const NavEvery = styled.div`
    font-size:10px;
    color:red;
`;
const NavSsu = styled.div`
    font-size:20px;
    font-weight: bold;
`;
const NavSearchIcon = styled.div` 
    font-size:20px;
    padding-right:30px;
`;
const NavPersonIcon = styled.img`
  width: 30%;
  margin-right: 2px;
  backgorundcolor:red;
`;


const MainPage = () => {

    return (
        <Nav>
            <NavBox>
                <NavEvery>에브리타임</NavEvery>
                <NavSsu>숭실대</NavSsu>
            </NavBox>
            <NavBoxIcon>
                <NavSearchIcon>돋보기 아이콘</NavSearchIcon>
                <NavPersonIcon
                src={navIcons.person}
                alt="프로필"
                />
            </NavBoxIcon>
        </Nav>
    );
};

export default MainPage;

