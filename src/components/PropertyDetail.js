import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import React from "react";


const PropertyDetail = () => {

    const params = useParams();

    const [propertyDetail, setPropertyDetail] = useState({});

    const fetchProperty = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/properties/' + params.id)
        console.log(result.data)
        setPropertyDetail(result.data)
    }

    useEffect(() => {
            console.log("PARAM ID: " , params.id)
            fetchProperty();
        }, [params.id])


    let productDetailsDisplay = null;

    if (params.id) {
        productDetailsDisplay = 
        <div className="PropertyDetail" key = {propertyDetail.id}>
                <div>
                    Property Details
                </div>
                <h1> {propertyDetail.name}</h1>
                <div >
                    {propertyDetail.rentAmount}
                    <br />

                    <div style={{ textAlign: "left" }}>

                        {propertyDetail.photos != null ? propertyDetail.photos.map(p => {
                            return <img src={p}></img>
                        }) : null}
                    </div>
                </div>
            </div>;
    }

    console.log(productDetailsDisplay);

    return productDetailsDisplay


}

export default PropertyDetail;