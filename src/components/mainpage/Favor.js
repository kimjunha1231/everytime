import React, { useState } from "react";
import styled from "styled-components";
import { BoardIcon } from '../../path/Resources';



const Board = styled.div`
  border: 2px solid #d3d3d3;
  border-radius: 10px;
  padding: 30px 20px 30px 20px;
`;
const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BoardTitle = styled.div`
  font-weight: bold;
  font-size: 25px;
`;

const View_More = styled.div`
  font-size: 17px;
  color:red;
`;
const BoardBottom = styled.div`
  margin-top: 10px;
`;

const BoardList = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0 20px 0;
  
`;
const BoardContentTitle = styled.div`
  font-size: 15px;
`;
const BoardContent = styled.div`
  font-weight: lighter;
  font-size: 10px;
  padding-left: 20px;
  width: 90%;
  color: #e3e3e3;
  overflow: hidden;
  text-overflow: ellipsis;
   
`;
const BoardContentBox = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
`; 
const NewIcon = styled.img`
 width: 10px;
 height: 10px;
`;


const Favor = () => {

  return (
    <Board>
      <BoardTop>
        <BoardTitle>즐겨찾는 게시판</BoardTitle>
        <View_More>더보기 ></View_More>
      </BoardTop>
      <BoardBottom>
        <BoardList>
          <BoardContentBox>
            <BoardContentTitle>자유게시판</BoardContentTitle>
            <BoardContent>통모짜 핫도그dwqkdnqwdnqkjwdnjqndjqnwjqwndjqnwdjqndwq집에 가고싶어요어어우주업주엊부엊부업주업주업주업ㅈ웆버웆버웆버웆버ㅜㅇ</BoardContent>
          </BoardContentBox>
          <NewIcon src={BoardIcon.newIcon} alt="뉴"></NewIcon>
        </BoardList>
        <BoardList>
          <BoardContentBox>
            <BoardContentTitle>자유게시판</BoardContentTitle>
            <BoardContent>통모짜 핫도그</BoardContent>
          </BoardContentBox>
          <NewIcon src={BoardIcon.newIcon} alt="뉴"></NewIcon>
        </BoardList><BoardList>
          <BoardContentBox>
            <BoardContentTitle>자유게시판</BoardContentTitle>
            <BoardContent>통모짜 핫도그</BoardContent>
          </BoardContentBox>
          <NewIcon src={BoardIcon.newIcon} alt="뉴"></NewIcon>
        </BoardList><BoardList>
          <BoardContentBox>
            <BoardContentTitle>자유게시판</BoardContentTitle>
            <BoardContent>통모짜 핫도그</BoardContent>
          </BoardContentBox>
          <NewIcon src={BoardIcon.newIcon} alt="뉴"></NewIcon>
        </BoardList><BoardList>
          <BoardContentBox>
            <BoardContentTitle>자유게시판</BoardContentTitle>
            <BoardContent>통모짜 핫도그</BoardContent>
          </BoardContentBox>
          <NewIcon src={BoardIcon.newIcon} alt="뉴"></NewIcon>
        </BoardList>

      </BoardBottom>
    </Board>
  );
};

export default Favor;





