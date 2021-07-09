import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


const UpsolveTable = ({ content }) => {
   
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Problem</th>
                        <th>Rating</th>
                        <th>Verdict</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        content.map((item,key) => {
                       const link = "https://codeforces.com/problemset/problem/" + item.problem.contestId + "/" + item.problem.index;
                            return (
                                <tr>
                                    <td>{key+1}</td>
                                    <td><a href={link} target="_blanck" >{item.problem.name}</a></td>
                                    <td>{item.problem.rating}</td>
                                    <td>{item.verdict}</td>
                                </tr>
                            );
                        })
                    }




                </tbody>
            </Table>
        </div>
    );
}

export default UpsolveTable;


