import React, { useEffect, useState } from 'react';
import Card from '../Cards/LadderCard';
import { useHistory } from 'react-router-dom';
import Loader from '../Cards/Loader';

const Ladder = () => {


    const [data, setData] = useState([]);
    const history = useHistory();
    const handle = localStorage.getItem('user-name'); 
    useEffect(() => {
        if(!handle)
        {
            history.push("/");
        }


        const url = "https://codeforces.com/api/problemset.problems";

        const fetchData = async () => {
            try {
                const response = await fetch(url);
                const tmpData = await response.json();

                const r800 = [];
                const r900 = [];
                const r1000 = [];
                const r1100 = [];
                const r1200 = [];
                const r1300 = [];
                const r1400 = [];
                const r1500 = [];
                const r1600 = [];
                const r1700 = [];
                const r1800 = [];
                const r1900 = [];
                const r2000 = [];
                const r2100 = [];
                const r2200 = [];
                const r2300 = [];
                const r2400 = [];
                const r2500 = [];
                const r2600 = [];
                const r2700 = [];
                const r2800 = [];
                const r2900 = [];
                const r3000 = [];
                const r3100 = [];
                const r3200 = [];
                const extra = [];

                if (tmpData.status === "OK") {
                    tmpData.result.problems.map(item => {
                        if (item.rating === 800) {
                            if (r800.length < 100) r800.push(item);
                        } else if (item.rating === 900) {
                            if (r900.length < 100) r900.push(item);
                        } else if (item.rating === 1000) {
                            if (r1000.length < 100) r1000.push(item);
                        } else if (item.rating === 1100) {
                            if (r1100.length < 100) r1100.push(item);
                        } else if (item.rating === 1200) {
                            if (r1200.length < 100) r1200.push(item);
                        } else if (item.rating === 1300) {
                            if (r1300.length < 100) r1300.push(item);
                        } else if (item.rating === 1400) {
                            if (r1400.length < 100) r1400.push(item);
                        } else if (item.rating === 1500) {
                            if (r1500.length < 100) r1500.push(item);
                        } else if (item.rating === 1600) {
                            if (r1600.length < 100) r1600.push(item);
                        } else if (item.rating === 1700) {
                            if (r1700.length < 100) r1700.push(item);
                        } else if (item.rating === 1800) {
                            if (r1800.length < 100) r1800.push(item);
                        } else if (item.rating === 1900) {
                            if (r1900.length < 100) r1900.push(item);
                        } else if (item.rating === 2000) {
                            if (r2000.length < 100) r2000.push(item);
                        } else if (item.rating === 2100) {
                            if (r2100.length < 100) r2100.push(item);
                        } else if (item.rating === 2200) {
                            if (r2200.length < 100) r2200.push(item);
                        } else if (item.rating === 2300) {
                            if (r2300.length < 100) r2300.push(item);
                        } else if (item.rating === 2400) {
                            if (r2400.length < 100) r2400.push(item);
                        } else if (item.rating === 2500) {
                            if (r2500.length < 100) r2500.push(item);
                        } else if (item.rating === 2600) {
                            if (r2600.length < 100) r2600.push(item);
                        } else if (item.rating === 2700) {
                            if (r2700.length < 100) r2700.push(item);
                        } else if (item.rating === 2800) {
                            if (r2800.length < 100) r2800.push(item);
                        } else if (item.rating === 2900) {
                            if (r2900.length < 100) r2900.push(item);
                        } else if (item.rating === 3000) {
                            if (r3000.length < 100) r3000.push(item);
                        } else if (item.rating === 3100) {
                            if (r3100.length < 100) r3100.push(item);
                        } else if (item.rating === 3200) {
                            if (r3200.length < 100) r3200.push(item);
                        } else {
                            if (extra.length < 100) extra.push(item);
                        }
                    });
                }
                else {
                    alert("something went wrong check your handle");
                }

                const xdata = [];

                xdata.push({ id: "800", content: r800 });
                xdata.push({ id: "900", content: r900 });
                xdata.push({ id: "1000", content: r1000 });
                xdata.push({ id: "1100", content: r1100 });
                xdata.push({ id: "1200", content: r1200 });
                xdata.push({ id: "1300", content: r1300 });
                xdata.push({ id: "1400", content: r1400 });
                xdata.push({ id: "1500", content: r1500 });
                xdata.push({ id: "1600", content: r1600 });
                xdata.push({ id: "1700", content: r1700 });
                xdata.push({ id: "1800", content: r1800 });
                xdata.push({ id: "1900", content: r1900 });
                xdata.push({ id: "2000", content: r2000 });
                xdata.push({ id: "2100", content: r2100 });
                xdata.push({ id: "2200", content: r2200 });
                xdata.push({ id: "2300", content: r2300 });
                xdata.push({ id: "2400", content: r2400 });
                xdata.push({ id: "2500", content: r2500 });
                xdata.push({ id: "2600", content: r2600 });
                xdata.push({ id: "2700", content: r2700 });
                xdata.push({ id: "2800", content: r2800 });
                xdata.push({ id: "2900", content: r2900 });
                xdata.push({ id: "3000", content: r3000 });
                xdata.push({ id: "3100", content: r3100 });
                xdata.push({ id: "3200", content: r3200 });
                if (extra.length > 0) {
                    xdata.push({ id: "More", content: extra });
                }
                setData(xdata);
            }
            catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, []);

    if(data.length===0)
    {
        return (<Loader />);
    }
    else{
        return (
                <>
                    <div className="Ladder">
                        <div className="container">
                            <h1 style={{ pading: '1.8rem 1.8rem', textAlign: 'center' }}>Ladder (Top 100 Problem) </h1>
                            <p style={{ color: "white", pading: '1.8rem 1.8rem', textAlign: 'center' }}>Select suitable rating problem</p>
                            <h2 style={{ color: "white", pading: '1.8rem 1.8rem', textAlign: 'center' }}>Let's Solve</h2>
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
}

export default Ladder;