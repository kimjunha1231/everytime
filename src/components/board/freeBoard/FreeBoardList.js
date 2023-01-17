import styled from "styled-components";
import {
    useRecoilValue,
    useRecoilState,
    useSetRecoilState,
} from 'recoil';
import { useNavigate } from "react-router-dom";
import { contentState, titleState, idState, listState } from "./Writing";
import React, { useRef, useState } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';




const Box = styled.div`
    margin-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
`;
const Title = styled.div`
    
`;
const Content = styled.div`
    width: 96%;
`;

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


const Test = styled.div`
    width: 50%;
    border: 1px solid #d3d3d3;
`;

const FreeBoardList = () => {
    const navigate = useNavigate();
    const titles = useRecoilValue(titleState)
    const contents = useRecoilValue(contentState)
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
            <Box>
                <CreateUser
                    title={title}
                    concent={content}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <UserList users={users} />
                <Title>{nextId}</Title>

                <Test onClick={() => navigate("/Test")} >작43성완료</Test>
            </Box>
            <WritingButton onClick={() => navigate("/Board/FreeBoard/Writing")}>글쓰기</WritingButton>
        </>
    );

}

export default FreeBoardList;