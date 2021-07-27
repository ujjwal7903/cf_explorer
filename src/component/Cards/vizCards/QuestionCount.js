import React from 'react';

const QuestionCount = () =>{
    return (
        <div>
            <table className="table table-dark table-hover ">
                <thead className="thead-light bg-info">
                    <tr>
                    <th scope="col" className="bg-info"></th>
                    <th scope="col" className="bg-info">Question Counts of</th>
                    <th scope="col" className="bg-info">umang_us</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td>Tried</td>
                    <td>1200</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Solved</td>
                    <td>1142</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Solved with one submission</td>
                    <td>665</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Max attempts</td>
                    <td>9<span style={{color:'gold'}} >(1245-B)</span></td>
                    </tr>
                </tbody>
        </table>

        </div>
    );
}


export default QuestionCount;