import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
    display: felx;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    background-color: white;
    padding: 20px 0;
`;
const NavList = styled.div`
    font-weight: bold;
    font-size: 20px;
    margin-left: 30px;
`;

const NavBar = () => {
    let navigate = useNavigate();

    return (
        <Nav>
            <NavList>게시판</NavList>
            <NavList>진로</NavList>
            <NavList>홍보</NavList>
            <NavList>단체</NavList>
        </Nav>
    );
};

export default NavBar;
