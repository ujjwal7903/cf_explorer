import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import solvedProblems from '../Data/SolvedData';

const LadderTable = ({ content }) => {

    const handle = localStorage.getItem('user-name');
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>#</th>
                        <th style={{ textAlign: 'center' }}>Problems</th>
                        <th style={{ textAlign: 'center' }}>Redirect</th>
                        <th style={{ textAlign: 'center' }}>ID</th>
                        <th style={{ textAlign: 'center' }}>Index</th>
                        <th style={{ textAlign: 'center' }}>Solved (Y/N)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, key) => {
                            const link = "https://codeforces.com/problemset/problem/" + item.contestId + "/" + item.index;
                            const val = "" + item.contestId + item.index;
                            var xx = "";
                            if(solvedProblems.has(val)) xx="YES";
                            else    xx="NO";
                            return (
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{key + 1}</td>
                                    <td>{item.name}</td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">VISIT</a></td>
                                    <td style={{ textAlign: 'center' }} className="td_style">{item.contestId}</td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">{item.index}</a></td>
                                    <td style={{ textAlign: 'center' }} className="td_style">{xx}</td>
                                </tr>
                            );
                        })
                    }




                </tbody>
            </Table>
        </div>
    );
}

export default LadderTable;


