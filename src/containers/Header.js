import React from "react";

import { Link } from 'react-router-dom';

// import logo from '../../assets/logos/miu-logo.png';



const Header = () => {

    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/properties"> Properties</Link></li>
                    <li><Link to="/add-property"> Add Property</Link></li>
                </ul>
            </nav>
        </header>
    );
}



export default Header;