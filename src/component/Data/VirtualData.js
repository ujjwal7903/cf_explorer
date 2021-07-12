const data = [];

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

// const handle = localStorage.getItem('user-name');

fetch("https://codeforces.com/api/contest.list")
    .then(response => response.json())
    .then(data => {

        data.result.forEach(contestData => {
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

        })

    }).catch(err => {
        console.log(err);
    })

data.push({ id: "All", content: allc });
data.push({ id: "Upcoming", content: upc });
data.push({ id: "Div1", content: d1 });
data.push({ id: "Div2", content: d2 });
data.push({ id: "Div3", content: d3 });
data.push({ id: "Div4", content: d4 });
data.push({ id: "Educational", content: d5 });
data.push({ id: "Global", content: d6 });
data.push({ id: "ICPC", content: d7 });
data.push({ id: "Beta", content: d8 });
data.push({ id: "Microsoft", content: d9 });
data.push({ id: "Kotlin", content: d10 });
data.push({ id: "Funny", content: d11 });
data.push({ id: "New Year", content: d12 });
data.push({ id: "Others", content: d13 });

export default data;