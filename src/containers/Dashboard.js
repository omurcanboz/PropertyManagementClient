
import React from "react";
import Header from "./Header";
import MyRoute from "./MyRoute";

const Dashboard = () => {

    

    return(
        <React.Fragment>
     
        <div>
            <Header/>
            
        </div>
        
        <div className="Properties">
                <MyRoute></MyRoute>
            </div>
        
        
        </React.Fragment>
    )

}

export default Dashboard;