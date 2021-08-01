import React from 'react';
const handle = localStorage.getItem('user-name');


const QuestionCount = (props) =>{
    return (
        <div>
            <table className="table table-dark table-hover ">
                <thead className="thead-light bg-info">
                    <tr>
                    <th scope="col" className="bg-info"></th>
                    <th scope="col" className="bg-info">Question Counts of</th>
                    <th scope="col" className="bg-info">{handle}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row"></th>
                    <td>Tried</td>
                    <td>{props.tried}</td>
                    </tr>
                    <tr>
                    <th scope="row"></th>
                    <td>Solved</td>
                    <td>{props.solved}</td>
                    </tr>
                    
                </tbody>
        </table>

        </div>
    );
}


export default QuestionCount;