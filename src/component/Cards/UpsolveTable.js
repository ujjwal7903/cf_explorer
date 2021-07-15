import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


const UpsolveTable = ({ content }) => {

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>#</th>
                        <th style={{ textAlign: 'center' }}>Problem</th>
                        <th style={{ textAlign: 'center' }}>Redirect</th>
                        <th style={{ textAlign: 'center' }}>Rating</th>
                        <th style={{ textAlign: 'center' }}>Verdict</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        content.map((item, key) => {
                            const link = "https://codeforces.com/problemset/problem/" + item.problem.contestId + "/" + item.problem.index;
                            return (
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{key+1}</td>
                                    <td>{item.problem.name}</td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">VISIT</a></td>
                                    <td style={{ textAlign: 'center' }} className="td_style">{item.problem.rating}</td>
                                    <td style={{ textAlign: 'center' }} className="td_style">{item.verdict}</td>
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


