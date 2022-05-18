import React, { useEffect, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import axios from 'axios';



function ChartsAdmin() {
    const [stateIncomeState, setStateIncomeState] = useState([])
    const [daysValueState, setDaysValueState] = useState([])
    const [daysState, setDaysState] = useState([])

    const [stateSelector, setStateSelector] = useState([]);
    const [selectedState, setSelectedState] = useState();
    const getState = async () => {
        let result = await axios.get('http://localhost:8080/api/v1/states');
        setStateSelector(result.data);
    }
    const onStateFieldsChanged = (event) => {
        let copy = { ...selectedState };
        console.log("selected: ", event.target.value);
        copy= event.target.value
        setSelectedState(copy);
    }

    let stateData = [];
    const fetchByState = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/cities/incomes/'+selectedState)
        for (let i = 0; i < result.data.length; i++) {
            stateData.push({ value: result.data[i].total, name: result.data[i].name })
        }
        setStateIncomeState(stateData)

    }
    let days = []
    let dayValues = []
    const fetchByWeek = async () => {
        const result = await axios.get('http://localhost:8080/api/v1/properties/num-of-properties')
        for (let i = 0; i < result.data.length; i++) {
            days.push(result.data[i].day)
            dayValues.push(result.data[i].rented)
        }
        setDaysState(days)
        setDaysValueState(dayValues)

    }

    useEffect(() => {
        stateData = [];
        days = [];
        dayValues = [];
        getState();
        setSelectedState(48); //48 virginia default for demo purpose
        fetchByState();
        fetchByWeek();
    }, [])
    useEffect(() => {
        stateData = [];
        fetchByState();
    }, [selectedState])


    const optionPieState = {
        title: {
            text: 'Total income per location',
            subtext: 'By State',
            left: 'center'
        },
        tooltip: {
            trigger: 'item'
        },
        legend: {
            orient: 'vertical',
            left: 'left'
        },
        series: [
            {
                name: 'Daily Income',
                type: 'pie',
                radius: '50%',
                data: stateIncomeState,
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    const optionLine = {
        title: {
            text: 'Number of properties rented in a week',
            left: 'center'
        },
        xAxis: {
            type: 'category',
            data: daysState,
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                data: daysValueState,
                type: 'bar'
            }
        ]
    };
    return (
        <div>
            <div>
                State
                <select onChange={onStateFieldsChanged}>

                    <option defaultValue>Select</option>
                    {stateSelector.map(s => {
                        return (
                            <option key={s.id} value={[s.id]}>{s.name}</option>
                        )
                    })}

                </select>
            </div>

            <div className="charts">
                <ReactECharts option={optionPieState} />
                <ReactECharts option={optionLine} />
            </div>
        </div>
    );

}
export default ChartsAdmin;
