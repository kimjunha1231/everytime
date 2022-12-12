import React from "react";
import styled from "styled-components";
import { navIcons } from "../../../path/Resources";
import { atom,useRecoilState } from 'recoil';

const NavBox = styled.div`
    position: fixed;
    top:0;
    left: 0;
    right: 0;
    padding: 20px 0 0 20px;
    display: flex;
    align-items: center;
    z-index: 0;
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
const EtcList = styled.div`
    background-color: white;
    position: absolute;
    top: 0%;
    right: 0;
    padding: 10px 20px 10px 20px;
    margin: 10px 15px 0 0;

    border: 1px solid #ededed;
    z-index: 1;
`;
const EtcContent = styled.div`
    font-size:18px;
    margin: 20px 0;
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

    return (
        <NavBox >
            <LeftIcon src={navIcons.leftarrow} alt="나가기" />
            <NavTextBox>
                <NavTitle>자유게시판</NavTitle>
                <NavSchool>숭실대</NavSchool>
            </NavTextBox>
            <SearchIcon src={navIcons.search} alt="검색" />
            <EtcIcon onClick={EtcMode} src={navIcons.etc} alt="기타" />
            {etcOpen && <EtcList >
                <EtcContent>새로고침</EtcContent>
                <EtcContent>글 쓰기</EtcContent>
                <EtcContent>즐겨찾기에서 삭제</EtcContent>
            </EtcList>}

        </NavBox>
    );
};

