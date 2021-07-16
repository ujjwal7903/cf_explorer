import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import solvedProblems from '../Data/SolvedData';

const VirtualTable = ({ content }) => {

    const handle = localStorage.getItem('user-name');
    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th style={{ textAlign: 'center' }}>#</th>
                        <th style={{ textAlign: 'center' }}>Contest</th>
                        <th style={{ textAlign: 'center' }}>Redirect</th>
                        <th style={{ textAlign: 'center' }}>ID</th>
                        <th style={{ textAlign: 'center' }}>Attempted</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, key) => {
                            var link = "";
                            if(item.phase==="FINISHED") link="https://codeforces.com/contest/" + item.id;
                            else    link="https://codeforces.com/contests";

                            const va = "" + item.id + "A";
                            const vb = "" + item.id + "B";
                            const vc = "" + item.id + "C";
                            const vd = "" + item.id + "D";
                            const ve = "" + item.id + "E";
                            const vf = "" + item.id + "F";
                            const vg = "" + item.id + "G";
                            const vh = "" + item.id + "H";

                            var xx = "";
                            if(solvedProblems.has(va) || solvedProblems.has(vb) || solvedProblems.has(vc) || solvedProblems.has(vd))  xx="YES";
                            else if(solvedProblems.has(ve) || solvedProblems.has(vf) || solvedProblems.has(vg) || solvedProblems.has(vh))  xx="YES";
                            else    xx="NO";
                            
                            return (
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{key + 1}</td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" style={{textDecoration: 'none', color: 'white'}}>{item.name}</a></td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">VISIT</a></td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">{item.id}</a></td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">{xx}</a></td>
                                </tr>
                            );
                        })
                    }




                </tbody>
            </Table>
        </div>
    );
}

export default VirtualTable;


