import React, { useEffect, useState } from 'react';
import Card from '../Cards/RecommenderCard';
import solvedProblems from '../Data/SolvedData';
import { useHistory } from 'react-router-dom';
import Loader from '../Cards/Loader';


// item.id = A , B ..
// content = Question

const Recommender = () => {

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
                console.log(tmpData);

                const A = [];  // A not done
                const B = [];
                const C = [];
                const D = [];
                const E = [];
                const F = [];
                const G = [];
                const H = [];

                const R800 = [];
                const R900 = [];
                const R1000 = [];
                const R1100 = [];
                const R1200 = [];
                const R1300 = [];
                const R1400 = [];
                const R1500 = [];
                const R1600 = [];
                const R1700 = [];
                const R1800 = [];
                const R1900 = [];
                const R2000 = [];
                const R2100 = [];
                const R2200 = [];
                const R2300 = [];
                const R2400 = [];
                const R2500 = [];
                const R2600 = [];
                const R2700 = [];
                const R2800 = [];
                const R2900 = [];
                const R3000 = [];
                const R3100 = [];
                const R3200 = [];

                if (tmpData.status === "OK") {
                    tmpData.result.problems.map(item => {
                        const str = `${item.contestId}${item.index}`;     // 1512A
                        str.toString();

                        if (!solvedProblems.has(str)) {
                            if (item.index === "A") A.push(item);
                            else if (item.index === "B") B.push(item);
                            else if (item.index === "C") C.push(item);
                            else if (item.index === "D") D.push(item);
                            else if (item.index === "E") E.push(item);
                            else if (item.index === "F") F.push(item);
                            else if (item.index === "G") G.push(item);
                            else if (item.index === "H") H.push(item);

                            // console.log(item.rating);
                            if (item.rating === 800) R800.push(item);
                            else if (item.rating === 900) R900.push(item);
                            else if (item.rating === 1000) R1000.push(item);
                            else if (item.rating === 1100) R1100.push(item);
                            else if (item.rating === 1200) R1200.push(item);
                            else if (item.rating === 1300) R1300.push(item);
                            else if (item.rating === 1400) R1400.push(item);
                            else if (item.rating === 1500) R1500.push(item);
                            else if (item.rating === 1600) R1600.push(item);
                            else if (item.rating === 1700) R1700.push(item);
                            else if (item.rating === 1800) R1800.push(item);
                            else if (item.rating === 1900) R1900.push(item);
                            else if (item.rating === 2000) R2000.push(item);
                            else if (item.rating === 2100) R2100.push(item);
                            else if (item.rating === 2200) R2200.push(item);
                            else if (item.rating === 2300) R2300.push(item);
                            else if (item.rating === 2400) R2400.push(item);
                            else if (item.rating === 2500) R2500.push(item);
                            else if (item.rating === 2600) R2600.push(item);
                            else if (item.rating === 2700) R2700.push(item);
                            else if (item.rating === 2800) R2800.push(item);
                            else if (item.rating === 2900) R2900.push(item);
                            else if (item.rating === 3000) R3000.push(item);
                            else if (item.rating === 3100) R3100.push(item);
                            else if (item.rating === 3200) R3200.push(item);



                        }
                    });
                }
                else {
                    alert("something went wrong check your handle");
                }

                const index = Math.floor(Math.random() * 10);
                //   console.log(R2900);

                const Tempo = [];

                Tempo.push({ id: "A", content: A[index] });
                Tempo.push({ id: "B", content: B[index] });
                Tempo.push({ id: "C", content: C[index] });
                Tempo.push({ id: "D", content: D[index] });
                Tempo.push({ id: "E", content: E[index] });
                Tempo.push({ id: "F", content: F[index] });
                Tempo.push({ id: "G", content: G[index] });
                Tempo.push({ id: "H", content: H[index] });

                Tempo.push({ id: 800, content: R800[index] });
                Tempo.push({ id: 900, content: R900[index] });
                Tempo.push({ id: 1000, content: R1000[index] });
                Tempo.push({ id: 1100, content: R1100[index] });
                Tempo.push({ id: 1200, content: R1200[index] });
                Tempo.push({ id: 1300, content: R1300[index] });
                Tempo.push({ id: 1400, content: R1400[index] });
                Tempo.push({ id: 1500, content: R1500[index] });
                Tempo.push({ id: 1600, content: R1600[index] });
                Tempo.push({ id: 1700, content: R1700[index] });
                Tempo.push({ id: 1800, content: R1800[index] });
                Tempo.push({ id: 1900, content: R1900[index] });
                Tempo.push({ id: 2000, content: R2000[index] });
                Tempo.push({ id: 2100, content: R2100[index] });
                Tempo.push({ id: 2200, content: R2200[index] });
                Tempo.push({ id: 2300, content: R2300[index] });
                Tempo.push({ id: 2400, content: R2400[index] });
                Tempo.push({ id: 2500, content: R2500[index] });
                Tempo.push({ id: 2600, content: R2600[index] });
                Tempo.push({ id: 2700, content: R2700[index] });
                Tempo.push({ id: 2800, content: R2800[index] });
                Tempo.push({ id: 2900, content: R2900[index] });
                Tempo.push({ id: 3000, content: R3000[index] });
                Tempo.push({ id: 3100, content: R3100[index] });
                Tempo.push({ id: 3200, content: R3200[index] });



                setData(Tempo);

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
        <div className="Upsolver">
            <div className="container">
                <h1 style={{ pading: '20px 20px', textAlign: 'center' }}>Random and challenge</h1>
                <p style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>Accept the challenge</p>
                <h2 style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>If you get bored! try a random</h2>
                <div className="row">
                    {
                        data.map(item => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card key={item.id} name={"Challenge " + item.id} content={item.content} />
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

