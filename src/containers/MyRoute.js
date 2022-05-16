import Properties from "../components/Properties";
import PropertyDetail from "../components/PropertyDetail";
import { Route, Routes } from "react-router";
import React from "react";
import AddProperty from "../components/AddProperty";

export default function MyRoute() {
    return (

        <Routes>
            
            <Route path="properties" element={<Properties/>}>
            </Route>

            <Route path="properties/:id" element={<PropertyDetail/>}>
            </Route>

            <Route path="add-property" element={<AddProperty></AddProperty>}>
            </Route>

        </Routes>


    );
}