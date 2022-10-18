import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/UserContext';

const SignUp = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);
    console.log(createUser);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        console.log(name, email, password);
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log("register ", user);
            })
            .catch(error => {
                console.error("error ", error);
            })

    }

    const handleGoogleSingIn = () => {
        signInWithGoogle()
            .then(resutl => {
                const user = resutl.user;
                console.log(user);
            })
            .catch(error => console.error(error));
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Please Register Now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input type="text" name='name' placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" />
                                    <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">Already have an account? Please sign in!</Link>
                                    </label>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn btn-primary">Sign Up</button>
                                </div>
                            </form>
                            <button onClick={handleGoogleSingIn} className="btn btn-outline btn-success mt-5">Google Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;