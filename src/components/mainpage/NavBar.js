import React from "react";
import styled from "styled-components";
import { navIcons } from '../../path/Resources';
import { useNavigate } from "react-router-dom";

const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    position: fixed;
    top:0;
    left: 0;
    width:100%;
    background-color: white;
    padding: 20px 0 10px 20px;
`;
const NavBox = styled.div`

`;
const NavBoxIcon = styled.div`
    display:flex;
    justify-content:end;
    padding-right: 30px;
`;
const NavEvery = styled.div`
    font-size:10px;
    color:red;
`;
const NavSsu = styled.div`
    font-size:18px;
    font-weight: bold;
`;
const NavSearchIcon = styled.img` 
    height: 45px;
`;
const NavPersonIcon = styled.img`
    height: 45px;
`;

const NavBar = () => {
    let navigate = useNavigate();

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
                    onClick= {()=>navigate("/profile")}
                    src={navIcons.person}
                    alt="프로필"
                />
            </NavBoxIcon>
        </Nav>
    );
};

export default NavBar;

