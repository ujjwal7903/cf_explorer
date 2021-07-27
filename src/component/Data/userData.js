const user_data = [];

const handle = localStorage.getItem('user-name');

fetch("https://codeforces.com/api/user.info?handles=" + handle)
    .then(response => response.json())
    .then(data => {
         console.log(data);
        if (data.status === "OK") {
            user_data.push(data);
        }
        else {
            alert("something went wrong check your handle");
        }

    }).catch(err => {
        console.log(err);
    })

export default user_data;