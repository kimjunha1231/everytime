import React from "react";
import styled from "styled-components";
import { navIcons } from "../../../path/Resources";
import { atom, useRecoilState } from 'recoil';
import { useNavigate } from "react-router-dom";
import Modal from "./Modal";

const NavBox = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    padding: 20px 0 0 20px;
    display: flex;
    align-items: center;

`;
const LeftIcon = styled.img`
    height: 25px;
    margin-right: 20px;
`;
const SearchIcon = styled.img`
    height: 45px;
    margin-right: 10px;
`;
const NavTitle = styled.div`
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 4px;
`;
const NavTextBox = styled.div`
   margin-right: 210px;
`;
const NavSchool = styled.div`
    font-size: 10px;
    color:#cbcbcb;
`;
const EtcIcon = styled.img`
    height: 20px;
`;

export const etcstate = atom({
    key: 'etcstate',
    default: false,
});
export const FreeBoardNav = () => {
    const [etcOpen, setEtcOpen] = useRecoilState(etcstate);
    const EtcMode = () => {
        setEtcOpen(!etcOpen)
    }
    const navigate = useNavigate();
    return (
        <NavBox >
            <LeftIcon onClick={() => navigate(-1)} src={navIcons.leftarrow} alt="나가기" />
            <NavTextBox>
                <NavTitle>자유게시판</NavTitle>
                <NavSchool>숭실대</NavSchool>
            </NavTextBox>
            <SearchIcon src={navIcons.search} alt="검색" />
            <EtcIcon onClick={EtcMode} src={navIcons.etc} alt="기타" />
            {etcOpen &&
                <Modal></Modal>}

        </NavBox>
    );
};

