import React from 'react';

const ContestCount = () =>{
    return (
        <div>
            <table className="table table-dark table-hover ">
                <thead className="thead-light bg-info">
                    <tr>
                    <th scope="col" className="bg-info"></th>
                    <th scope="col" className="bg-info">Contest Counts of</th>
                    <th scope="col" className="bg-info">umang_us</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td>Number of Contest</td>
                    <td>110</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Best Rank</td>
                    <td>242</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Worst Rank</td>
                    <td>10608</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Max up / Max down</td>
                    <td>1372 / -124 </td>
                    </tr>
                </tbody>
        </table>

        </div>
    );
}


export default ContestCount;