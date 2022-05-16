
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";

const AddProperty = () => {

    const data = useRef();
    const [stateSelector, setStateSelector] = useState([]);
    const [citySelector, setCitySelector] = useState([]);
    const [propertyType, setPropertyType] = useState([]);

    const [state, setState] = useState({});
    const [city, setCity] = useState({});
    const [type, setType] = useState({});

    const persistData = async (event) => {
        event.preventDefault();
        var object = {};
        const form = new FormData(data);
        form.forEach((value, key) => object[key] = value);
        var json = JSON.stringify(object);
        console.log("FORM DATA: ", json);

    }

    const getState = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/states');
        console.log(result.data);
        setStateSelector(result.data);
    }

    const getPropertyType = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/property-types');
        setPropertyType(result.data);
    }

    const getCity = async (event) => {
        let val = event.target.value;
        console.log("VALUE: ", event.target)
        let result = await axios.get('http://localhost:8080/api/v1/cities/state/' + val);
        setCitySelector(result.data);
    }

    useEffect(() => {
        getState();
        getPropertyType();
    }, [])



    return (

        <div>

            <form ref={data} onSubmit={persistData}>

                <div >
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' />
                </div>

                <div >
                    <label htmlFor='numBed'>Number of Bedrooms</label>
                    <input type='text' id='numBed' />
                </div>

                <div >
                    <label htmlFor='numBath'>Number of Bathrooms</label>
                    <input type='text' id='numBath' />
                </div>

                <div >
                    <label htmlFor='amount'>Rent Amount</label>
                    <input type='text' id='amount' />
                </div>

                <div >
                    <label htmlFor='deposit'>Security Deposit Amount</label>
                    <input type='text' id='deposit' />
                </div>

                <div>
                    State
                    <select onChange={getCity}>

                        <option defaultValue>Select</option>
                        {stateSelector.map(s => {
                            return (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            )
                        })}

                    </select>
                </div>

                <div>
                    City
                    <select>
                        <option defaultValue>Select</option>
                        {citySelector.map(s => {
                            return (
                                <option key={s.id} value={s.id}>{s.name}</option>
                            )

                        })}

                    </select>
                </div>

                <div>
                    Property Type
                    <select>
                        <option defaultValue>Select</option>
                        {propertyType.map(s => {
                            return (
                                <option key={s.id} value={s.id}>{s.type}</option>
                            )
                        })}

                    </select>
                </div>

                <button>Save</button>

            </form>

        </div>

    )

}

export default AddProperty;