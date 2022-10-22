import React, { useState } from "react";
import styled from "styled-components";
import { navIcons } from '../path/Resources'
const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;
    height:50px;
    width:100%;
`;
const NavBox = styled.div`
`;
const NavBoxIcon = styled.div`
    display:flex;
    justify-content:end;
`;
const NavEvery = styled.div`
    font-size:10px;
    color:red;
`;
const NavSsu = styled.div`
    font-size:20px;
    font-weight: bold;
`;
const NavSearchIcon = styled.img` 
    width: 10%;
`;
const NavPersonIcon = styled.img`
  width: 10%;
`;


const MainPage = () => {

    return (
        <Nav>
            <NavBox>
                <NavEvery>에브리타임</NavEvery>
                <NavSsu>숭실대</NavSsu>
            </NavBox>
            <NavBoxIcon>
                
                <NavSearchIcon
                    src={navIcons.search}
                    alt="검색"
                />
                <NavPersonIcon
                    src={navIcons.person}
                    alt="프로필"
                />
            </NavBoxIcon>
        </Nav>
    );
};

export default MainPage;

