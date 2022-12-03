import React, { useState } from "react";
import styled from "styled-components";
import { navIcons } from '../../path/Resources'
import { useNavigate } from "react-router-dom";

const Nick = styled.input`
    font-size: 10px;
`;
const NickName = () => {
    let navigate = useNavigate();
    const [username, setUsername] = useState("");
    const onChangeField = e => {
        setUsername(e.target.value);
    };
    return (
        <>
            <div>안녕</div>
            
        </>
    );
}

export default NickName;