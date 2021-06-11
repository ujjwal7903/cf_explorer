import React from 'react';
import Card from './Card';


const data = ["Card 1" , "Card 2" ,"Card 3", "Card 4" , "Card 5" ,"Card 6" ,"Card 7" , "Card 8" ,"Card 9","Card 10"];

const Dashboard = () =>{

    return(
        <div className="dashboard">

            <h1 style={{pading:'20px 20px', marginLeft:'600px'}}>CODE LIKE BEAST</h1>
            <div className="user">umang_us</div>
            
            <div className="container">
            <div className="row">
               {
                   data.map(item =>{
                       return(
                            <div className="col-6">
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