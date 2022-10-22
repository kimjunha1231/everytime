import React, { useState } from "react";
import styled from "styled-components";

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
const NavPersonIcon = styled.div` 
    font-size:20px;
  
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
                <NavPersonIcon>사람 아이콘</NavPersonIcon>
            </NavBoxIcon>
        </Nav>
    );
};

export default MainPage;

