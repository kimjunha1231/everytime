import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { navIcons } from '../../path/Resources'

const Nav = styled.div`
    display:flex;
    align-items: center;
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    width: 100%;
    background-color: white;
    padding: 20px 0px 10px 20px;
`;
const ArrowIcon = styled.img`
    width: 20px;
    margin-right: 20px;
`;
const NavTitle = styled.div`
    font-size:20px;
    font-weight: bold;
`;
const NavBar =() =>{
    let navigate = useNavigate();
    return(
        <Nav>
            <ArrowIcon onClick = {()=>navigate("/")}src={navIcons.leftarrow} alt="화살표"></ArrowIcon>  
            <NavTitle>내 정보</NavTitle>
        </Nav>
    );
}
export default NavBar;