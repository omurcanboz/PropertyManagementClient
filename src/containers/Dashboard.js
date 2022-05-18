
import React from "react";
import { useState } from "react";
import Header from "./Header";
import MyRoute from "./MyRoute";
import Login from "../components/Login/LoginScreen";

const Dashboard = () => {

    return (
        <React.Fragment>
            <div>
            <Header></Header>
            </div>


            <div className="Properties">
                <MyRoute></MyRoute>
            
            </div>


        </React.Fragment>
    )

}

export default Dashboard;