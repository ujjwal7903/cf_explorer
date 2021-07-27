import React from 'react';
import {Bar} from 'react-chartjs-2';

// https://www.chartjs.org/docs/latest/getting-started/usage.html

const BarChart = () =>{
    return (
        <div>
            <Bar 
                data={{
                    labels: ['A', 'B', 'C', 'D', 'E', 'F'],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        hoverOffset: 4
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

export default BarChart;
