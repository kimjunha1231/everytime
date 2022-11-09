import React, { useState } from "react";
import styled from "styled-components";
import { SlickIcons } from '../../path/Resources';



const Board = styled.div`
  
  border: 2px solid grey;
  border-radius: 10px;

  
  padding: 10px;
 
`;
const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BoardTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
`;

const View_More = styled.div`
  font-size: 10px;
  color:red;
`;
const BoardBottom = styled.div`
  
`;

const BoardList = styled.div`
  display: flex;
  justify-content: space-between;
`;
const BoardContentTitle = styled.div`
  
`;
const BoardContent = styled.div`
  
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
          <BoardContentTitle>자유게시판</BoardContentTitle>
          <BoardContent>통모짜 핫도그</BoardContent>
        </BoardList>
        <BoardList>
          <BoardContentTitle>비밀게시판</BoardContentTitle>
          <BoardContent>통모짜 핫도그</BoardContent>
        </BoardList>
        <BoardList>
          <BoardContentTitle>졸업생게시판</BoardContentTitle>
          <BoardContent>통모짜 핫도그</BoardContent>
        </BoardList>
        <BoardList>
          <BoardContentTitle>새내기게시판</BoardContentTitle>
          <BoardContent>시사•이슈</BoardContent>
        </BoardList>
        <BoardList>
          <BoardContentTitle>시사•이슈</BoardContentTitle>
          <BoardContent>통모짜 핫도그</BoardContent>
        </BoardList>

      </BoardBottom>
    </Board>
  );
};

export default Favor;





