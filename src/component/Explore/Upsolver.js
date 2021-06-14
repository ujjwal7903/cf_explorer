import { React } from "react";
import Card from '../Cards/UpsolverCard';

const data = [{"id":"A"},{"id":"B"},{"id":"C"},{"id":"D"},{"id":"E"},{"id":"F"},{"id":"G"},{"id":"H"}];

// https://codeforces.com/api/problemset.problems
// https://codeforces.com/api/user.status?handle=umang_us&from=1&count=10

// Total wrong problems
// recent 10 not AC 
// All not AC
// A not AC
// B not AC




const Upsolver = () => {
    return (
        <div className="Upsolver">
            <div className="container">
                <h1 style={{pading:'20px 20px', textAlign: 'center'}}>UPSOLVER</h1>
                <p style={{color:"white",pading:'20px 20px', textAlign: 'center'}}>Upsolve to Grow More</p>
                <h2 style={{color:"white",pading:'20px 20px', textAlign: 'center'}}>Total not Accepted : 10</h2>
                <div className="row">
               {
                   data.map(item =>{
                       return(
                            <div className="col-lg-4 col-md-6 col-sm-12">
                                <Card  name={"upsolve " + item.id}  />
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