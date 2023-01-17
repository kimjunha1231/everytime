import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ProfileIcons } from "../../../path/Resources";
import { atom, useRecoilState, useSetRecoilState } from 'recoil';
import { useState } from "react";
import { UserLists } from "./UserList";
import FreeBoardList from "./FreeBoardList";

const CloseIcon = styled.img`
    width: 15px;
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
const CompleteButton = styled.button`
    background-color: red;
    border-radius: 20px;
    padding: 10px 15px;
    font-size: 10px;
    border: none;
    color:white;
    margin-left: 230px;
`;

const WritingBox = styled.div`
    text-align: center;
    margin-top: 80px;
`;

const TitleBox = styled.input`
    width: 95%;
    border: none;
    border-bottom: 2px solid #f2f2f2;
    padding: 0 0 10px 10px;
    outline: none;
    font-size: 20px;
    ::placeholder {
    color: #bdbdbd;
  }
`;

const ContentBox = styled.input`
    width: 95%;
    margin-top: 30px;
    
    border: none;
    padding: 0px 0 500px 10px;
    outline: none;
    font-size: 15px;
    ::placeholder {
        color: #bdbdbd;
  }
`;


const Writing = () => {
    const navigate = useNavigate();
    const nextId = useState(1)
    const [list, setList] = useState({
        title: '',
        content: '',
    })
    const { title, content } = list;

    const onChange = e => {
        const { name, value } = e.target;

        setList({
            ...list,
            [name]: value,
        });
    };
    const [users, setUsers] = useState([
        {
            id: 1,
            title: 'velopert',
            content: 'public.velopert@gmail.com',
        },
    ]);
    const onCreate = () => {
        const user = {
            id: nextId.current,
            title,
            content,
        };
        setUsers(users.concat(user));

        setList({
            title: '',
            content: '',
        });

        nextId.current += 1;
    };
    return (
        <>
            <NavBar>
                <CloseIcon onClick={() => navigate(-1)} src={ProfileIcons.close} alt="나가기"></CloseIcon>
                <NavTitle>글 쓰기 </NavTitle>
                <CompleteButton onClick={() => { onCreate(); }} >완료</CompleteButton>
            </NavBar>
            <WritingBox>
                <TitleBox
                    name="title"
                    onChange={onChange}
                    value={title}
                    placeholder="제목"
                />
                <ContentBox
                    name="content"
                    onChange={onChange}
                    value={content}
                    placeholder="내용을 입력하세요."
                />
                <UserLists users={users} />
            </WritingBox>
        </>
    )
}
export default Writing;