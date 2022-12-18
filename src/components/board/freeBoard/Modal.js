import React from "react";
import styled from "styled-components";
import { useRecoilState } from "recoil";
import { etcstate } from "./FreeBoardNav";

const EtcModal = styled.div`
    z-index: 1000;
  overflow: auto;
  background-color: white;
    position: fixed; 
    top:10px;
    right: 10px;
    padding: 10px 20px 10px 20px;
    border: 1px solid #ededed; 
`;
const EtcModalBox = styled.div`
    box-sizing: border-box;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 999;
`;

const EtcContent = styled.div`
    font-size:18px;
    margin: 20px 0;
    width: 100%;
`;

const Modal = () => {
    const [close, setclose] = useRecoilState(etcstate);
    const clickOutside = (e) => {
        if (e.target === e.currentTarget) {
            setclose(!close);
        }
    };
    return (
        <EtcModalBox onClick={clickOutside}>
            <EtcModal >
                <EtcContent>새로고침</EtcContent>
                <EtcContent>글 쓰기</EtcContent>
                <EtcContent>즐겨찾기에서 삭제</EtcContent>
            </EtcModal>
        </EtcModalBox>
    )
}
export default Modal;