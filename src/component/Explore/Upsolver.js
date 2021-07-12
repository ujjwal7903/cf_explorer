import React  from "react";
import Card from '../Cards/UpsolverCard';
import data from '../Data/UpSolverData';

// to do -- If accepted any time remove it from array

const Upsolver = () => {

    return (
        <div className="Upsolver">
            <div className="container">
                <h1 style={{ pading: '20px 20px', textAlign: 'center' }}>UPSOLVER</h1>
                <p style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>Upsolve to Grow More</p>
                <h2 style={{ color: "white", pading: '20px 20px', textAlign: 'center' }}>Total not Accepted : 10</h2>
                <div className="row">
                    {
                        data.map(item => {
                            return (
                                <div className="col-lg-4 col-md-6 col-sm-12">
                                    <Card name={"upsolve " + item.id} content={item.content} />
                                </div>
                            );
                        })
                    }
                </div>

            </div>

        </div>
    );
}

export default Upsolver;