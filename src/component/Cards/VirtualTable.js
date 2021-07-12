import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


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
                        <th style={{ textAlign: 'center' }}>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, key) => {
                            const link = "https://codeforces.com/contest/" + item.id;

                            return (
                                <tr>
                                    <td style={{ textAlign: 'center' }}>{key + 1}</td>
                                    <td>{item.name}</td>
                                    <td style={{ textAlign: 'center' }}><a href={link} target="_blanck" className="td_style">VISIT</a></td>
                                    <td style={{ textAlign: 'center' }}>{item.id}</td>
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


