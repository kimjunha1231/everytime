import React from "react";
import styled from "styled-components";
import { navIcons } from '../../path/Resources'

const Nav = styled.div`
    display:flex;
    justify-content:space-between;
    position: fixed;
    top:0;
    width:100%;
    background-color: white;
    padding: 20px 0 0px 20px;
`;

const NavBar =() =>{
    return(
        <Nav>안녕나는</Nav>
    );
}
export default NavBar;