import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import React, { useRef, useState } from 'react'
import { listState } from './Writing'
import { useRecoilValue } from 'recoil'


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
  margin-top: 20px;
`;

const FreeBoardList = () => {
  const navigate = useNavigate()
  const sist = useRecoilValue(listState)

  return (
    <>
      <ListBox>
        {sist.map((item, idx) => (
          <React.Fragment key={'BoardItemKey' + idx}>
            <List>         
              <div>{item.content}</div>
              <div>{item.title}</div>
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
