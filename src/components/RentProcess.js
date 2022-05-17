import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import { useParams } from "react-router";
import "react-datepicker/dist/react-datepicker.css";
import StripeContainer from "./StripeContainer";


const RentProcess = (props) => {

    const context = createContext();

    const params = useParams();
    const [startDate, setStartDate] = useState();

    const [propertyState, setPropertyState] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);

    useEffect(() => {
        fetchProperty();
    }, [])

    useEffect(() => {
        console.log(startDate);

        const date1 = new Date();
        const date2 = startDate;
        const diffTime = Math.abs(date2 - date1);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        let result = diffDays * propertyState.rentAmount;
        console.log("RESULT: " , result)

        setTotalAmount(result);

        console.log("TOTAL: ", totalAmount);


    }, [startDate])

    const fetchProperty = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/properties/' + params.id)
        setPropertyState(result.data)
    }

    const onHandleChange = (date) => {
        setStartDate(date);
    }

    return (
        <div>

<div style={{"width" : "100%"}} ><DatePicker selected={startDate} onChange={onHandleChange} dateFormat="MM/dd/yyyy" name="myDate" /></div>
<div style={{"width" : "100%"}}><h1>Total Amount {totalAmount}</h1></div>
<div style={{"width" : "100%"}}><StripeContainer amount={totalAmount}></StripeContainer></div>
            
            

            

        </div>

    )
}

export default RentProcess;

