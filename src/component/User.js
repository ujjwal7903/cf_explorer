import React from 'react';
import {Link} from 'react-router-dom';

const User = () => {

    const user_name = localStorage.getItem('user-name');
    return (
        <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                {user_name}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><Link className="dropdown-item" to="/">LogOut</Link></li>  
                <li><Link className="dropdown-item" to="/">Profile</Link></li>  
            </ul>
        </div>
    );
}

export default User;