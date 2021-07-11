const data = [];

const allc = [];
const d1 = [];      // Div1
const d2 = [];      // Div2
const d3 = [];      // Div3
const d4 = [];      // Div4
const d5 = [];      // Educational
const d6 = [];      // Global round
const d7 = [];      // Codeforces Beta Round
const d8 = [];      // all other rounds

// const handle = localStorage.getItem('user-name');

fetch("https://codeforces.com/api/contest.list")
    .then(response => response.json())
    .then(data => {
        
        data.result.forEach(contestData => { 
            if(contestData.phase == "FINISHED"){
                allc.push(contestData);

                var snm=contestData.name.substring(23,29);

                var edunm=contestData.name.substring(0,11);

                if(snm==="Div. 1")  d1.push(contestData);
                else if(snm==="Div. 2") d2.push(contestData);
                else if(snm==="Div. 3") d3.push(contestData);
                else if(snm==="Div. 4") d4.push(contestData);
                else if(edunm==="Educational")  d5.push(contestData);
                else if(contestData.name.substring(0,23)==="Codeforces Global Round")   d6.push(contestData);
                else if(contestData.name.substring(0,21)==="Codeforces Beta Round")   d7.push(contestData);
                else    d8.push(contestData);
            }
            
        })
    
    }).catch(err => {
        console.log(err);
    })

    data.push({id:"All",content:allc});
    data.push({id:"Div1",content:d1});
    data.push({id:"Div2",content:d2});
    data.push({id:"Div3",content:d3});
    data.push({id:"Div4",content:d4});
    data.push({id:"Educational",content:d5});
    data.push({id:"Global",content:d6});
    data.push({id:"Beta",content:d7});
    data.push({id:"Other",content:d8});

export default data;