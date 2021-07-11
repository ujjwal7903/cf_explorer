import React, { useState } from 'react';
import { Table } from 'react-bootstrap';


const VirtualTable = ({ content }) => {

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Contest</th>
                        <th>Id</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        content.map((item, key) => {
                            const link = "https://codeforces.com/contest/" + item.id;
                            return (
                                <tr>
                                    <td>{key+1}</td>
                                    <td><a href={link} target="_blanck" >{item.name}</a></td>
                                    <td>{item.id}</td>
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


