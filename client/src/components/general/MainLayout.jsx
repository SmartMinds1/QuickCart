import React from "react";
import NavBar from "../Home/NavBar"
import Footer from "./Footer";
import {Outlet} from "react-router-dom";
import "./MainLayout.css";

const MainLoyout = ()=>{
    return(
        <div className="layout">
        <NavBar/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
        </div>
    )
}

export default MainLoyout;