import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Header = () => {
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="mr-10" to="/">Home</Link>
                <Link className="mr-10" to="/login">Sign In</Link>
                <Link className="mr-10" to="/register">Sign Up</Link>

                {user?.email && <span>Welcome {user.email}</span>}
            </div>
        </div>
    );
};

export default Header;