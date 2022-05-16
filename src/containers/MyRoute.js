import Properties from "../components/Properties";
import PropertyDetail from "../components/PropertyDetail";
import { Route, Routes } from "react-router";
import React from "react";

export default function MyRoute() {
    return (

        <Routes>

            <Route path="properties" element={<Properties/>}>
                <Route path=":id" element={<PropertyDetail/>}/>
            </Route>

        </Routes>


    );
}