import React, { useState, useEffect } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);


export default function DrivingAndMileageTimeChart({ drivingandmileagetime }) {

    const [mileageTime, setMileageTime] = useState(0);
    const [drivingTime, setDrivingTime] = useState(0);
    const [dates, setDates] = useState([]);

    useEffect(() => {

        setMileageTime(drivingandmileagetime.map(element => element.mileage === null ? element.mileage = 0 : element.mileage));
        setDrivingTime(drivingandmileagetime.map(element => element.drivingtime == null ? element.drivingtime = 0 : (element.drivingtime / 60) / 60));
        setDates(drivingandmileagetime.map(element => element.datetime));

    }, [drivingandmileagetime])

    const data = {
        labels: dates,
        datasets: [
            {
                data: mileageTime,
                label: 'Mileage',
                backgroundColor: 'rgb(0,255,255)',
                borderColor: 'rgb(0,0,255)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255, 99, 132, 0.4)',
                hoverBorderColor: 'rgba(255, 99, 132, 1)',
                yAxisID: 'y',
            },
            {
                data: drivingTime,
                type: 'bar',
                label: 'Driving Time',
                backgroundColor: 'rgba(255, 99, 132, 0.4)',
                borderColor: 'rgba(255, 99, 132, 0.4)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(0,255,255)',
                hoverBorderColor: 'rgb(0,0,255)',
                yAxisID: 'y1',
            }
        ],
    }

    const options = {
        responsive: true,
        scales: {
            y: {
                display: true,
                min: 0,
                ticks: {
                    callback: function (value) {
                        return value + ' km';
                    },
                    maxTicksLimit: 6,
                    beginAtZero: true
                },
            },
            y1: {
                display: true,
                min: 0,
                max: 10,
                ticks: {
                    callback: function (value) {
                        return '' + value + ' h';
                    },
                    stepSize: 2,
                    maxTicksLimit: 6,
                    beginAtZero: true
                },
                position: 'right',
                grid: {
                    drawOnChartArea: false,
                },
            },
            x: {
                ticks: {
                    maxTicksLimit: 15,
                    stepSize: 2
                },
                scaleLabel: {
                    display: true,
                    labelString: "Hehe",
                    padding: 10
                }
            },

        }
    }

    return (
        <div style={{ height: '30vh', width: '100%' }}>
            <h3></h3>
            <Line
                data={data}
                options={options}
            />
        </div>
    )
}
