import React from "react";

const Property = (props) => {

    return(
        <div>

            <h1>{props.name}</h1>
            <img src={props.image} width="150px" height="150px"></img>
            <p>Property Type : {props.type}</p>
            <p>Bedroom : {props.bedroom}</p>
            <p>Bathroom : {props.bathroom}</p>
            <p>Rent Amount : {props.amount}</p>
            <p>Deposit Amount : {props.deposit}</p>
            <p>Location : {props.state}/{props.city}</p>

        </div>
    );

}

export default Property;