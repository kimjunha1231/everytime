import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Profile from "./components/profile/ProfileIndex";
import { NickName } from "./components/profile/NickName";
import MainPage from "./components/mainpage/MainIndex";
import BoardList from "./components/boardlist/BoardListindex";
import FreeBoard from "./components/board/freeBoard/FreeBoardindex";
import Writing from "./components/board/freeBoard/Writing";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/profile/NickNameChange" element={<NickName />} exact />
        <Route path="/" element={<MainPage />} />
        <Route path="/BoardList" element={<BoardList />}/>
        <Route path="/Board/FreeBoard" element={<FreeBoard/>}/>
        <Route path="/Board/FreeBoard/Writing" element={<Writing/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;