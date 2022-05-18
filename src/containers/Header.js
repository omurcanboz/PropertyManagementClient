import React from "react";

import { Link } from 'react-router-dom';
import { getRole } from "../util/Utility";

// import logo from '../../assets/logos/miu-logo.png';



const Header = () => {

    const role = getRole();

    let result;

    if (role === "TENANT") {
        result = <header>
            <nav>
                <ul>
                    <li><Link to="/properties"> Properties</Link></li>
                </ul>
            </nav>
        </header>
    } else if (role === "LANDLORD") {
        result = <header>
            <nav>
                <ul>
                    <li><Link to="/landlord-charts"> Landlord Charts</Link></li>
                    <li><Link to="/add-property"> Add Property</Link></li>
                </ul>
            </nav>
        </header>
    } else {
        result = <header>
            <nav>
                <ul>
                    <li><Link to="/admin-charts"> Admin Charts</Link></li>
                </ul>
            </nav>
        </header>
    }



    return result;
}



export default Header;