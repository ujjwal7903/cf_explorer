const solvedProblems = new Set();

const handle = localStorage.getItem('user-name');

// solved problems from status
fetch("https://codeforces.com/api/user.status?handle=" + handle)
    .then(response => response.json())
    .then(data => {
        //  console.log(data);
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

export default solvedProblems;