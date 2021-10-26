import React , {useState , useEffect} from 'react';
import { useHistory } from 'react-router';

const Landing = () =>{

    const [handle , setHandle] = useState("");
    const history = useHistory();

    useEffect(()=>{
        if(localStorage.getItem('user-name'))
        {
            history.push("/dashboard");
        }
    });


    const login = () =>{
       // console.log(handle);

       if(handle === "")
       {
           alert("enter user name");
           return;
       }

       fetch("https://codeforces.com/api/user.info?handles=" + handle)
        .then(response => response.json())
        .then(data =>{
            console.log(data);
            if(data.status === "OK")
            {
                localStorage.setItem('user-name',handle);
                window.location.reload(); 
                history.push("/dashboard");   
            }
            else{
              alert("user Not found");
            }

        })
        .catch(err =>{
            console.log(err);
        })

    }

    return(
        <div className="landing-page fluid-container" >
            <h1>Welcome To CF-explorer</h1>
            <h2>Explore the Tools! <span style={{color:'InfoBackground'}}> Enjoy the Game :)</span> </h2>
           <div className="container landing-card">
                <input 
                    className="user-name" 
                    placeholder="user name" 
                    type="text" 
                    onChange={(e)=>(setHandle(e.target.value))}
                />
                <br />
                <button 
                    className="btn btn-dark"
                    style={{marginTop:'40px',width:'200px',height:'40px',fontSize:'20px'}}
                    onClick={login}    
                >
                Submit
                </button>
           </div>
        </div>
    );
}

export default Landing;