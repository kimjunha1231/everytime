import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import { listState } from './Writing'
import { useRecoilValue } from 'recoil'
import { BoardListIcons, BoardIcon } from '../../../path/Resources'
import { nameState } from '../../profile/NickName'

const WritingButton = styled.div`
  overflow: hidden;
  border-radius: 50px;
  border: 1px solid #d3d3d3;
  width: 30%;
  position: fixed;
  bottom: 30px;
  margin: 0 auto;
  left: 0;
  right: 0;
`;
const ListBox = styled.div`
  margin-top: 80px;
`;
const List = styled.div`
  border-bottom: 1px solid #d3d3d3;
  padding: 15px 0px 6px 7px;
  width: 100%;
`;

const ScreenShotIcon = styled.img`
  width: 100%;
  height: 20vh;
`;
const BoardTitle = styled.div`
  font-size: 17px;
`;
const BoardContent = styled.div`
  font-size: 13px;
  color: #848484;
  font-weight: 600;
  margin: 7px 0px;
`;
const Times = styled.div`
  color: #d3d3d3;
  font-size: 10px;

`;
const TimeNameBox = styled.div`
  margin-top: 3px;
  display: flex;
  
`;
const NickName = styled.div`
  font-size: 10px;
  color:#d3d3d3;
  margin-left: 4px;
`;
const ChatLikeBox = styled.div`
  justify-content: flex-end;
  display: flex;
`;
const ChatIcon = styled.img`
  width: 3%;
`;
const EtcBox = styled.div`
  display: flex;

  justify-content: space-between;
`;

const LikeIcon = styled.img`
  width: 3%;
`;
const ContentBox = styled.div`

`;
const FreeBoardList = () => {
  const navigate = useNavigate()
  const lists = useRecoilValue(listState)
  const name = useRecoilValue(nameState)

  return (
    <>
      <ListBox>
        <ScreenShotIcon src={BoardListIcons.freeboard} alt="아뇽" />
        {lists.map((item, idx) => (
          <React.Fragment key={'BoardItemKey' + idx}>
            <List>
              <ContentBox>
                <BoardTitle>{item.title}</BoardTitle>
                <BoardContent>{item.content}</BoardContent>
              </ContentBox>
              <EtcBox>
                <TimeNameBox>
                  <Times>2분 전 |</Times>
                  <NickName>{name}</NickName>
                </TimeNameBox>
                <ChatLikeBox>
                  <LikeIcon src={BoardIcon.like} alt="좋아" />
                  <ChatIcon src={BoardIcon.chat} alt="챗!" />
                </ChatLikeBox>
              </EtcBox>
            </List>

          </React.Fragment>
        ))}
      </ListBox>

      <WritingButton onClick={() => navigate('/Board/FreeBoard/Writing')}>
        글쓰기
      </WritingButton>

    </>
  )
}

export default FreeBoardList
