import { React } from "react";
import Card from '../Cards/VirtualCard';
import data from '../Data/VirtualData';

const VirtualContest = () => {
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