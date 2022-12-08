import React from "react";
import styled from "styled-components";
import { navIcons } from "../../path/Resources";

const BoardListBox = styled.div`
    border: 1.2px solid #e3e3e3;
    margin-top: 80px;
    padding: 25px 20px;
    display: flex;
    border-radius: 20px;
`;
const BoardBox = styled.div`
    display: flex;
`;
const BoardTitle = styled.div`
    font-size: 15px;
    font-weight: bold;
`;
const BoardIcon = styled.img`
    width: 10px;
`;


const List = () => {
    return (
        <BoardListBox>
            <BoardBox>
                <BoardIcon src={navIcons.person}></BoardIcon>
                <BoardTitle>안녕</BoardTitle>
            </BoardBox>

        </BoardListBox>
    );
};

export default List;