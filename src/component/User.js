import React from 'react';
import {Link} from 'react-router-dom';

const User = () => {

    const logout = () =>{
        localStorage.removeItem('user-name');
    }

    const user_name = localStorage.getItem('user-name');
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle user-btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {user_name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link onClick={()=>logout()} className="dropdown-item" to="/">LogOut</Link></li>  
                <li><a className="dropdown-item" target="_blank" href={`https://codeforces.com/profile/${user_name}`} >Profile</a></li>  
            </ul>
        </div>
    );
}

export default User;