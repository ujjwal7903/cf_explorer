import React from 'react';

const handle = localStorage.getItem('user-name');

const ContestCount = (props) =>{
    return (
        <div>
            <table className="table table-dark table-hover ">
                <thead className="thead-light bg-info">
                    <tr>
                    <th scope="col" className="bg-info"></th>
                    <th scope="col" className="bg-info">Contest Counts of</th>
                    <th scope="col" className="bg-info">{handle}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td>Number of Contest</td>
                    <td>{props.count}</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Best Rank/Worst Rank</td>
                    <td>{props.bestRank}/{props.worstRank}</td>
                    </tr>
                   
                    
                </tbody>
        </table>

        </div>
    );
}


export default ContestCount;