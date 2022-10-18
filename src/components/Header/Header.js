import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';


const Header = () => {
    const { user, logOut } = useContext(AuthContext)
    console.log(user);

    const handleSignOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="mr-10" to="/">Home</Link>
                <Link className="mr-10" to="/login">Sign In</Link>
                <Link className="mr-10" to="/register">Sign Up</Link>

                {user?.email && <span>Welcome {user.email}<button onClick={handleSignOut} className="btn btn-sm">Sign Out</button></span>}
            </div>
        </div>
    );
};

export default Header;