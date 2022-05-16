
import React from "react";
import Property from "./Property";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react"



const Properties = (props) => {

    const [propertyState, setPropertyState] = useState([]);

    const fetchProperties = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/properties')
        setPropertyState(result.data);
    }

    useEffect(() => {
        fetchProperties();
    }, [])


    const propertyList = propertyState.map(p => {

        return (



            <div key={p.id}>

                <Link to={`${p.id}`} >

                    <Property key={p.id} name={p.name}
                        image={p.photos[0]}
                        type={p.propertyType.type}
                        bedroom={p.numberOfBedrooms}
                        bathroom={p.numberOfBathrooms}
                        amount={p.rentAmount}
                        deposit={p.securityDepositAmount}
                        state={p.city.state.name}
                        city={p.city.name}

                    >


                    </Property>

                </Link>

            </div>



        )

    })

    
    return propertyList;


}

export default Properties;

