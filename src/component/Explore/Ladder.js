import { React } from "react";
import Card from '../Cards/LadderCard';
import data from '../Data/LadderData';

const Ladder = () => {
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

export default Ladder;