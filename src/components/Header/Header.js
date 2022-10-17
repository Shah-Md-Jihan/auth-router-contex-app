import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="navbar bg-primary text-primary-content">
                <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
                <Link className="mr-10" to="/">Home</Link>
                <Link className="mr-10" to="/login">Sign In</Link>
                <Link className="mr-10" to="/register">Sign Up</Link>
            </div>
        </div>
    );
};

export default Header;