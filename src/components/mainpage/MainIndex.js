import React from "react";
import NavBar from "./NavBar";
import CardSlider from "./CardSlider";
import Favor from "./Favorites";
import  Footer  from "./Footer";

export default function MainPage() {
    return (
        <>
            <NavBar/>
            <CardSlider/>
            <Favor/>       
            <Footer/>
        </>

    );
}

