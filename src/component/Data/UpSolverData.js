// set learning source : https://www.youtube.com/watch?v=nGOnfYNo8F4
// const myArray = Array.from(mySet); 

const data = [];  // data for upsolved problems

const A = [];
const B = [];
const C = [];
const D = [];
const E = [];
const F = [];
const G = [];
const H = [];

const DoneSet = new Set();

const handle = localStorage.getItem('user-name');

// data verdict OK 

fetch("https://codeforces.com/api/user.status?handle=" + handle)
    .then(response => response.json())
    .then(data => {
      //  console.log(data);
        if(data.status ==="OK")
        {
            data.result.map(item=>{
                
                const str = `${item.problem.contestId}${item.problem.index}`;
                str.toString();
            //    console.log(str);
                if(!DoneSet.has(str))
                {
                   // console.log(item.problem);
                    if(item.verdict!=="OK")
                    {
                        if(item.problem.index==="A")
                        {
                            A.push(item);
                        }
                        if(item.problem.index==="B")
                        {
                            B.push(item);
                        }
                        if(item.problem.index==="C")
                        {
                            C.push(item);
                        }
                        if(item.problem.index==="D")
                        {
                            D.push(item);
                        }
                        if(item.problem.index==="E")
                        {
                            E.push(item);
                        }
                        if(item.problem.index==="F")
                        {
                            F.push(item);
                        }
                        if(item.problem.index==="G")
                        {
                            G.push(item);
                        }
                        if(item.problem.index==="H")
                        {
                            H.push(item);
                        }
                    }
                    DoneSet.add(str);
                }
                
            })
        }
        else
        {
            alert("something went wrong check your handle");
        }

    }).catch(err => {
        console.log(err);
    })

  //  console.log(A);
    data.push({id:"A",content:A});
    data.push({id:"B",content:B});
    data.push({id:"C",content:C});
    data.push({id:"D",content:D});
    data.push({id:"E",content:E});
    data.push({id:"F",content:F});
    data.push({id:"G",content:G});
    data.push({id:"H",content:H});


export default data;