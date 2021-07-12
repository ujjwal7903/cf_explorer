import React  from "react";
import {dataRecommend,dataName,dataRating} from '../Data/RecommenderData';
import Card from '../Cards/RecommenderCard';

// pick a random
// recommend best for me random 
// recommend me A B C ...
// recommend me of ratting



const Recommender = () => {

 //   console.log(dataName);
    
    return (
        <div className="Recommender">
             <div className="container">
                <h1 style={{pading:'20px 20px', textAlign: 'center'}}>RECOMMENDER</h1>
                <p style={{color:"white",pading:'20px 20px', textAlign: 'center'}}>I'm Bored ! <span style={{color:'grey'}}> Give Me a Problem </span></p>
                <h2 style={{color:"white",pading:'20px 20px', textAlign: 'center'}}>Ratting : 2100</h2>
                <div className="row">
                {
                     dataRecommend.map(item =>{
                        return(
                             <div className="col-lg-4 col-md-6 col-sm-12">
                                 <Card  name={item}   />
                             </div>
                        );
                    })
                }
               </div>
               <div className="row">
                {
                     dataName.map(item =>{
                        return(
                             <div className="col-lg-4 col-md-6 col-sm-12">
                                 <Card  name={item.id}   />
                             </div>
                        );
                    })
                }
               </div>
               <div className="row">
                {
                     dataRating.map(item =>{
                        return(
                             <div className="col-lg-4 col-md-6 col-sm-12">
                                 <Card  name={item.id}   />
                             </div>
                        );
                    })
                }
               </div>
            </div>
        </div>

    );
}

export default Recommender;