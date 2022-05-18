
import React from "react";
import { useState } from "react";
import Header from "./Header";
import MyRoute from "./MyRoute";
import Login from "../components/Login/LoginScreen";

const Dashboard = () => {
    /*
    const [authState, setAuthState] = useState("")
    let header;
    let login;
    let isLoggedIn = (authState !== "");
    if (isLoggedIn) {
        header = <Header />;
    } else {
        login = <Login setAuthState={setAuth}></Login>
    }
    const setAuth = (auth) => {
        setAuthState(auth)
    }
*/
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