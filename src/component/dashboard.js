import React from 'react';
import Card from './Cards/Card';
import User from './User';
import {data} from './Data/CardData';

const Dashboard = () =>{

    return(
        <div className="dashboard">
            <User />;
            <div className="container" >
            <h1 style={{textAlign: 'center'}}>CODE MODE ON</h1>
            <div className="row">
               {
                   data.map(item =>{
                       return(
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card _id={item._id} name={item.name} link={item.link} />
                            </div>
                       );
                   })
               }
               </div> 
            </div>
        </div>
    );
    
}

export default Dashboard;