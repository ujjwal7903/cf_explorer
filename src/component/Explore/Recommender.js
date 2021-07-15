import React from "react";
import { useEffect, useState } from "react";
import { dataRecommend, dataName, dataRating } from '../Data/RecommenderData';
import Card from '../Cards/RecommenderCard';

// pick a random
// recommend best for me random 
// recommend me A B C ...
// recommend me of ratting



const Recommender = () => {
    const handle = localStorage.getItem('user-name');
    const [datarec, temp] = useState([]);
    useEffect(() => {
        loadData();
    }, []);
    const loadData = async () => {
        await fetch("https://codeforces.com/api/user.status?handle=" + handle)
            .then(response => response.json())
            .then(receivedData => temp(receivedData));
    }
    // console.log("Ujjwal");
    // console.log(datarec[10]);
    // console.log(datarec);
    //   console.log(dataName[0]);
    console.log(dataRecommend);


    return (
        <div className="Recommender">
            <div className="container">
                <h1 style={{ pading: '20px 20px', textAlign: 'center' }}>RECOMMENDER</h1>
                <p style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>I'm Bored ! <span style={{ color: 'grey' }}> Give Me a Problem </span></p>
                <h2 style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>Rating : 2100</h2>
                <div className="row">
                    {
                        dataRecommend.map(item => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card name={item.id} content={item.content} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row">
                    {
                        dataName.map(item => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card name={item.id} content={item.content} />
                                </div>
                            );
                        })
                    }
                </div>
                <div className="row">
                    {
                        dataRating.map(item => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card name={item.id} content={item.content} />
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