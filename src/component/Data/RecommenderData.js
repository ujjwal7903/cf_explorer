
// fetch problems with rating more than user rating unsolved
// fetch A unsolved , B unsolved ....
// fetch 1500 unsolved ....

// Selet a random Question for every card,
// push Question into the array


///need to fetch all problems  -- seperate

const dataRecommend = [];
const dataName = [];
const dataRating = [];

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



const solvedProblems = new Set();

const handle = localStorage.getItem('user-name');


async function fetchStatus(){
    const response = await fetch("https://codeforces.com/api/user.status?handle=" + handle);
    const result = await response.json();
    return result;
}

async function fetchProblems() {
    const response = await fetch(" https://codeforces.com/api/problemset.problems");
    const result = await response.json();
    return result;
}


// solved problems from status

fetchStatus().then(data => {

    if (data.status === "OK") {
        data.result.map(item => {

            const str = `${item.problem.contestId}${item.problem.index}`;     // 1512A
            str.toString();

            if (item.verdict === "OK") {
                solvedProblems.add(str);
            }
        })
    }
    else {
        alert("something went wrong check your handle");
    }

}).catch(err => {
    console.log(err);
})



fetchProblems().then(data => {
    //   console.log(data);

    if (data.status === "OK") {
        data.result.problems.map(item => {
            const str = `${item.contestId}${item.index}`;     // 1512A
            str.toString();

            if (!solvedProblems.has(str)) {
                if (item.index === "A") A.push(item);
                if (item.index === "B") B.push(item);
                if (item.index === "C") C.push(item);
                if (item.index === "D") D.push(item);
                if (item.index === "E") E.push(item);
                if (item.index === "F") F.push(item);
                if (item.index === "G") G.push(item);
                if (item.index === "H") H.push(item);

                // console.log(item.rating);
                if (item.rating === "800") R800.push(item);
                if (item.rating === "900") R900.push(item);
                if (item.rating === "1000") R1000.push(item);
                if (item.rating === "1100") R1100.push(item);
                if (item.rating === "1200") R1200.push(item);
                if (item.rating === "1300") R1300.push(item);
                if (item.rating === "1400") R1400.push(item);
                if (item.rating === "1500") R1500.push(item);
                if (item.rating === "1600") R1600.push(item);
                if (item.rating === "1700") R1700.push(item);
                if (item.rating === "1800") R1800.push(item);
                if (item.rating === "1900") R1900.push(item);
                if (item.rating === "2000") R2000.push(item);
                if (item.rating === "2100") R2100.push(item);
                if (item.rating === "2200") R2200.push(item);
                if (item.rating === "2300") R2300.push(item);
                if (item.rating === "2400") R2400.push(item);
                if (item.rating === "2500") R2500.push(item);
                if (item.rating === "2600") R2600.push(item);
                if (item.rating === "2700") R2700.push(item);
                if (item.rating === "2800") R2800.push(item);
                if (item.rating === "2900") R2900.push(item);
                if (item.rating === "3000") R3000.push(item);
                if (item.rating === "3100") R3100.push(item);
                if (item.rating === "3200") R3200.push(item);



            }
        });
    }
    else {
        alert("something went wrong check your handle");
    }


}).catch(err => {
    console.log(err);
})


dataName.push({ id: "A", content: A });
dataName.push({ id: "B", content: B });
dataName.push({ id: "C", content: C });
dataName.push({ id: "D", content: D });
dataName.push({ id: "E", content: E });
dataName.push({ id: "F", content: F });
dataName.push({ id: "G", content: G });
dataName.push({ id: "H", content: H });

dataRating.push({ id: "800", content: R800 });
dataRating.push({ id: "900", content: R900 });
dataRating.push({ id: "1000", content: R1000 });
dataRating.push({ id: "1100", content: R1100 });
dataRating.push({ id: "1200", content: R1200 });
dataRating.push({ id: "1300", content: R1300 });
dataRating.push({ id: "1400", content: R1400 });
dataRating.push({ id: "1500", content: R1500 });
dataRating.push({ id: "1600", content: R1600 });
dataRating.push({ id: "1700", content: R1700 });
dataRating.push({ id: "1800", content: R1800 });
dataRating.push({ id: "1900", content: R1900 });
dataRating.push({ id: "2000", content: R2000 });
dataRating.push({ id: "2100", content: R2100 });
dataRating.push({ id: "2200", content: R2200 });
dataRating.push({ id: "2300", content: R2300 });
dataRating.push({ id: "2400", content: R2400 });
dataRating.push({ id: "2500", content: R2500 });
dataRating.push({ id: "2600", content: R2600 });
dataRating.push({ id: "2700", content: R2700 });
dataRating.push({ id: "2800", content: R2800 });
dataRating.push({ id: "2900", content: R2900 });
dataRating.push({ id: "3000", content: R3000 });
dataRating.push({ id: "3100", content: R3100 });
dataRating.push({ id: "3200", content: R3200 });



const Question = A;  //  fetch user rating and give according to it


dataRecommend.push({ id: "Recommend", content: Question });



// Give a random Question data from here rather of passing whole data


export { dataRecommend, dataName, dataRating };