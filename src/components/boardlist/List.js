import React from "react";
import styled from "styled-components";
import { BoardListIcons, BoardIcon } from "../../path/Resources";
import { useNavigate } from "react-router-dom";

const BoardListBox = styled.div`
    border: 1.2px solid #e3e3e3;
    margin-top: 80px;
    padding: 25px 20px;
    border-radius: 20px;
`;
const BoardBox = styled.div`
    display: flex;
    margin: 0 0 30px 0;
    align-items: center;
`;
const BoardTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
const BoardListIcon = styled.img`
    width: 18px; 
    margin-right:30px;
`;
const NewIcon = styled.img`
 width: 10px;
    margin-left: 10px;
`;


const List = () => {
    let navigate = useNavigate();
    return (
        <>
            <BoardListBox>
                <BoardBox>
                    <BoardListIcon src={BoardListIcons.toList}></BoardListIcon>
                    <BoardTitle>내가 쓴 글</BoardTitle>
                </BoardBox>
                <BoardBox>
                    <BoardListIcon src={BoardIcon.chat}></BoardListIcon>
                    <BoardTitle>댓글 단 글</BoardTitle>
                </BoardBox>
                <BoardBox>
                    <BoardListIcon src={BoardListIcons.star}></BoardListIcon>
                    <BoardTitle>스크랩</BoardTitle>
                </BoardBox>
                <BoardBox>
                    <BoardListIcon src={BoardListIcons.fire}></BoardListIcon>
                    <BoardTitle>Hot 게시판</BoardTitle>
                </BoardBox>
                <BoardBox style={{ margin: "0" }}>
                    <BoardListIcon src={BoardListIcons.trophy}></BoardListIcon>
                    <BoardTitle>Best 게시판</BoardTitle>

                </BoardBox>
            </BoardListBox>
            <BoardListBox style={{ margin: "30px 0 60px 0" }}>
                <BoardBox onClick={()=>navigate("/board/freeBoard")}>
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>자유게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox >
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>비밀 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox >
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>졸업생 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox >
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>새내기 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox >
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>시사·이슈 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox >
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>장터 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
                <BoardBox style={{ margin: "0" }}>
                    <BoardListIcon src={BoardListIcons.pin}></BoardListIcon>
                    <BoardTitle>정보 게시판</BoardTitle>
                    <NewIcon src= {BoardIcon.newIcon}></NewIcon>
                </BoardBox>
            </BoardListBox>
        </>
    );
};

export default List;