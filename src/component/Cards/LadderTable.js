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
                        <th style={{ textAlign: 'center' }}>Solved (Y/N)</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, key) => {
                            const link = "https://codeforces.com/problemset/problem/" + item.contestId + "/" + item.index;
                            const val = "" + item.contestId + item.index;
                            var xx = "";
                            var YNcolor='green';
                            if(solvedProblems.has(val)) {
                                xx="YES";
                                YNcolor='green';
                            }
                            else{
                                xx="NO";
                                YNcolor='red';
                            }    
                            const pId = "" + item.contestId + item.index;     // problem Id
                            return (
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{key + 1}</td>
                                    <td><a href={link} target="_blanck" style={{textDecoration: 'none', color: 'white'}}>{item.name}</a></td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">VISIT</a></td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">{pId}</a></td>
                                    <td style={{ textAlign: 'center'}}><div style={{backgroundColor:YNcolor}}><a href={link} target="_blanck" style={{color:'white'}} className="td_style">{xx}</a></div> </td>
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


