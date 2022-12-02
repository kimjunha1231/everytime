import React from "react";
import styled from "styled-components";
import { BoardIcon } from '../../path/Resources';



const Board = styled.div`
  border: 1px solid #d3d3d3;
  border-radius: 15px;
  padding: 20px 20px 0px 20px;
  margin-top: 20px ;
`;

const BoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const BoardTitle = styled.div`
  font-weight: bold;
  font-size: 18px;
`;

const ViewMore = styled.div`
  font-size: 13px;
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
  font-weight: 350;
  font-size: 11px;
  padding-left: 20px;
  width: 230px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
const BoardContentBox = styled.div`
  display: flex;
  align-items: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: :hidden;
`;
const NewIcon = styled.img`
 width: 10px;
 height: 10px;
`;
const AnonymIcon = styled.img`
 
 height: 13px;
`;
const BestBoardList = styled.div`
  margin: 20px 0 20px 0;
  width: 100%;
`;
const BestBoardTop = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Name = styled.div`
  font-size: 13px;
  font-weight: bold;
  margin-left:5px;
`;
const Time = styled.div`
  font-size: 10px;
  font-weight: lighter;
`;

const BestBoardTitleBox = styled.div`
  display: flex;
  align-items: center;
`;

const BestBoardCenter = styled.div`
  margin-top: 10px;
`;

const BestBoardContentTitle = styled.div`
  font-weight:bold;
  font-size: 15px;

`;

const BestBoardContent = styled.div`
  font-size: 13px;
  margin-top: 7px;
  width: 93%;
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;

const BestBoardBottom = styled.div`

`;

const BestBoardContentBoardName = styled.div`

  font-size: 11px;
  margin-top: 4px;
  color: #c7c7c7;
`;
const LikeIcon = styled.img`
  width: 10px;
`;

const Favor = () => {

  return (
    <>
      <Board>
        <BoardTop>
          <BoardTitle>즐겨찾는 게시판</BoardTitle>
          <ViewMore>더보기 ></ViewMore>
        </BoardTop>
        <BoardBottom>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>자유게시판</BoardContentTitle>
              <BoardContent>2학년 2학기 끝나고 겨울방학 현장실습 가능한가요??</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>비밀게시판</BoardContentTitle>
              <BoardContent>낯 가려서 처음 만나는 자리에서는 대답 리액션안해서 그런가???</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>졸업생게시판</BoardContentTitle>
              <BoardContent>직무면접시에 의도를 제대로 파악하지 못하고 너무 간략한</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>새내기게시판</BoardContentTitle>
              <BoardContent>[가을안녕] 가을 탐방 동아리 2기 모집</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>시사·이슈</BoardContentTitle>
              <BoardContent>이태원 참사 희생자명단을 공개해야하는이유</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>장터게시판</BoardContentTitle>
              <BoardContent>원룸 구해요!!</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>정보게시판</BoardContentTitle>
              <BoardContent>11월 14일 도담식당</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>취업·진로</BoardContentTitle>
              <BoardContent>비상경 문과 취업 관련 고민!!</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>홍보게시판</BoardContentTitle>
              <BoardContent>맛집 동아리[씹.뜯.맛.즐]</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>동아리·학회</BoardContentTitle>
              <BoardContent>i-ego(아이고) 소모임 3기!!</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
          <BoardList>
            <BoardContentBox>
              <BoardContentTitle>20학번 게시판</BoardContentTitle>
              <BoardContent>아 시1발 상병이다</BoardContent>
            </BoardContentBox>
            <NewIcon src={BoardIcon.newIcon} alt="new"></NewIcon>
          </BoardList>
        </BoardBottom>
      </Board>
      <Board>
        <BoardTitle>실시간 인기 글</BoardTitle>
        <BestBoardList>
          <BestBoardTop>
            <BestBoardTitleBox>
              <AnonymIcon src={BoardIcon.anonymIcon} alt="익명"></AnonymIcon>
              <Name>익명</Name>
            </BestBoardTitleBox>
            <Time>11/15 13:47</Time>
          </BestBoardTop>
          <BestBoardCenter>
            <BestBoardContentTitle>건너뛰기</BestBoardContentTitle>
            <BestBoardContent>건너뛰기 뿐만 아니라 선거 개표 때 이의제기 순서가 바뀐 것도 어쨋든 개표를 하던 와중이나 선거를 하고 있는 와중에 알게 되었다는 거잖아</BestBoardContent>
          </BestBoardCenter>
          <BestBoardBottom>
            <BestBoardContentBoardName>자유게시판</BestBoardContentBoardName>
            <LikeIcon src={BoardIcon.like} alt="like"></LikeIcon>
          </BestBoardBottom>
        </BestBoardList>
      </Board>
    </>
  );
};

export default Favor;





