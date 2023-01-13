import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProfileIcons } from "../../../path/Resources";

const CloseIcon = styled.img`
    width: 15px;
    margin-left: 10px;
    margin-right: 20px;
`;

const NavBar = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    padding: 20px 0 0 20px;
    display: flex;
    align-items: center;

`;
const NavTitle = styled.div`
    font-size: 20px;
    font-weight: 700;
`;

const TitleBox = styled.input`
  width: 50%;
  margin: 15px 0px 
  background-color: #f2f2f2;
  border: none;
  border-bottom: 2px solid ;
  padding: 0px 0px 10px 10px;
  color: white;
  outline: none;
  font-size: 15px;
  border-radius: 0;
  -webkit-border-radius: 0;
  ::placeholder {
    color: white;
  }
`;

export const Writing = () => {
    const navigate = useNavigate();

    return (
        <>
            <NavBar>
                <CloseIcon onClick={() => navigate(-1)} src={ProfileIcons.close} alt="나가기"></CloseIcon>
                <NavTitle>글 쓰기</NavTitle>
            </NavBar>
            <TitleBox type="title"
                placeholder="제목"

                disabled={false}

            />
        </>
    )
}

