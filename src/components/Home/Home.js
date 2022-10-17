import React, { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';

const Home = () => {
    const { user } = useContext(AuthContext);
    return (
        <div>
            <h3>Welcome {user?.email} on Home page</h3>
        </div>
    );
};

export default Home;