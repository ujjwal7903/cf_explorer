import React from 'react';
import {Doughnut } from 'react-chartjs-2';

// https://www.chartjs.org/docs/latest/getting-started/usage.html

const SolvedTagsCharts = (props) =>{
    return (
        <div>
            <Doughnut 
                data={{
                    labels: props.labels,
                    datasets: [{
                        label: props.labels,
                        data: props.data,
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
                        borderWidth: 0.5
                    }]
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio : false,
                   
                }}
            />
        </div>
    );
}

export default SolvedTagsCharts;
