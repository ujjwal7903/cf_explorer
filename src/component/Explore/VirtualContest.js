import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Card from '../Cards/VirtualCard';
import Loader from '../Cards/Loader';

const VirtualContest = () => {

    const [data, setData] = useState([]);
    const history = useHistory();
    const handle = localStorage.getItem('user-name'); 


    useEffect(() => {

        if(!handle)
        {
            history.push("/");
        }

        const url = "https://codeforces.com/api/contest.list";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const tmpData = await response.json();
                //   console.log(tmpData);
                const allc = [];    // all finished contest
                const upc = [];     // all upcoming contest
                const d1 = [];      // Div1
                const d2 = [];      // Div2
                const d3 = [];      // Div3
                const d4 = [];      // Div4
                const d5 = [];      // Educational
                const d6 = [];      // Global round
                const d7 = [];      // ICPC
                const d8 = [];      // Codeforces Beta Round
                const d9 = [];      // Microsoft Q# challange
                const d10 = [];      // Kotlin
                const d11 = [];     // April fools
                const d12 = [];     // New year
                const d13 = [];     // others

                tmpData.result.forEach(contestData => {
                    if (contestData.phase === "FINISHED") {
                        allc.push(contestData);

                        var snm = contestData.name.substring(23, 29);
                        var tmpname = contestData.name;
                        var len = tmpname.length;
                        var is_icpc = "NO";
                        for (var i = 0; i < len - 3; i++) {
                            if (tmpname.substring(i, i + 4) === "ICPC") is_icpc = "YES";
                        }
                        if (snm === "Div. 1") d1.push(contestData);
                        else if (snm === "Div. 2") d2.push(contestData);
                        else if (snm === "Div. 3") d3.push(contestData);
                        else if (snm === "Div. 4") d4.push(contestData);
                        else if (contestData.name.substring(0, 11) === "Educational") d5.push(contestData);
                        else if (contestData.name.substring(0, 23) === "Codeforces Global Round") d6.push(contestData);
                        else if (contestData.name.substring(0, 6) === "Kotlin") d10.push(contestData);
                        else if (is_icpc === "YES") d7.push(contestData);
                        else if (contestData.name.substring(0, 21) === "Codeforces Beta Round") d8.push(contestData);
                        else if (contestData.name.substring(0, 9) === "Microsoft") d9.push(contestData);
                        else if (contestData.name.substring(0, 5) === "April") d11.push(contestData);
                        else if (contestData.name.substring(0, 4) === "Good" || contestData.name.substring(0, 5) === "Hello") d12.push(contestData);
                        else d13.push(contestData);
                    }
                    else {
                        upc.push(contestData);
                    }

                    const xdata = [];

                    xdata.push({ id: "All", content: allc });
                    xdata.push({ id: "Upcoming", content: upc });
                    xdata.push({ id: "Div1", content: d1 });
                    xdata.push({ id: "Div2", content: d2 });
                    xdata.push({ id: "Div3", content: d3 });
                    xdata.push({ id: "Div4", content: d4 });
                    xdata.push({ id: "Educational", content: d5 });
                    xdata.push({ id: "Global", content: d6 });
                    xdata.push({ id: "ICPC", content: d7 });
                    xdata.push({ id: "Beta", content: d8 });
                    xdata.push({ id: "Microsoft", content: d9 });
                    xdata.push({ id: "Kotlin", content: d10 });
                    xdata.push({ id: "Funny", content: d11 });
                    xdata.push({ id: "New Year", content: d12 });
                    xdata.push({ id: "Others", content: d13 });

                    setData(xdata);

                })

            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    if(data.length===0)
    {
        return (<Loader />);
    }

    return (
        <>
            <div className="virtualContest">
                <div className="container">
                    <h1 style={{ pading: '1.8rem 1.8rem', textAlign: 'center' }}>Virtual Contest</h1>
                    <p style={{ color: "white", pading: '1.8rem 1.8rem', textAlign: 'center' }}>Practice virtually to Grow More</p>
                    <h2 style={{ color: "white", pading: '1.8rem 1.8rem', textAlign: 'center' }}>Let's Crack It!!</h2>
                    <div className="row">
                        {
                            data.map(item => {
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
        </>
    );
}

export default VirtualContest;