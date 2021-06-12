import React from 'react';
import Card from './Card';
import User from './User';


const data = ["Virtual Contest" , "Card 2" ,"Card 3", "Card 4" , "Card 5" ,"Card 6" ,"Card 7" , "Card 8" ,"Card 9"];

const Dashboard = () =>{

    return(
        <div className="dashboard">
            <User/>  
            <div className="container">
            <h1 style={{pading:'20px 20px', textAlign: 'center'}}>CODE LIKE BEAST</h1>
            <div className="row">
               {
                   data.map(item =>{
                       return(
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card show={item} />
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