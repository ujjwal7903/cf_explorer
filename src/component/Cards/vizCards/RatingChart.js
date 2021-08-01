import React from 'react';
import {Line} from 'react-chartjs-2';

// https://www.chartjs.org/docs/latest/getting-started/usage.html
// tooltips change 


/*
    hashmap in js

    const myMap = new Map();
    myMap.set('a',2);
    myMap.delete('a');
    myMap.clear();
    myMap.has(1) == true,false

*/ 



const RatingChart = (props) =>{
    return (
        <div>
            <Line 
                data={{
                    labels: props.labels,
                    datasets: [{
                        label: 'Ratting',
                        data: props.data,
                        fill:false,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.6)',
                            'rgba(54, 162, 235, 0.6)',
                            'rgba(255, 206, 86, 0.6)',
                            'rgba(75, 192, 192, 0.6)',
                            'rgba(153, 102, 255, 0.6)',
                            'rgba(255, 159, 64, 0.6)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio : false,
                    
                    scales: {
                        y: {
                            beginAtZero: true
                        }
                    }
                    
                }}
            />
        </div>
    );
}

export default RatingChart;
