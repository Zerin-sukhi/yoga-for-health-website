import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logImg from '../../../images/login.png';
import './Login.css';

const Login = () => {
    const { handleLogin, signInUsingGoogle } = useAuth();
    const { handleName, handleEmail, handlePassword, error } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop'; 

    // const signInUsingGoogle=()=>{
    //     signInUsingGoogle()
    //     .then(result=>{
    //         history.push(redirect_uri);
    //     })
    // }
    return (
        <div className="registration">
            <div className="form">
                <form onSubmit={handleLogin}>
                    <h3 className="text-success">Please Login</h3>
                    <div className="row mb-3">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                            <input type="text" onBlur={handleName} className="form-control" id="inputName" placeholder="Your Name" />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                            <input onBlur={handleEmail} type="email" className="form-control" id="inputEmail3" required />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                            <input type="password" onBlur={handlePassword} className="form-control" id="inputPassword3" required />
                        </div>
                    </div>
                    <div className="row mb-3">

                    </div>
                    <div className="row mb-3 text-danger">{error}</div>
                    <button onClick={handleLogin} type="submit" className="logiN">
                        Login
                    </button>
                    <div className="account">
                        <Link to="/register" className="signUp">New User?</Link>
                    </div>

                    <div className="google">
                        <p>You Can Also Sign In With</p> <span></span>
                        <button onClick={signInUsingGoogle} className="logiN" ><FontAwesomeIcon icon={faGoogle}/> <span>Sign In</span> </button>
                    </div>

                </form>
            </div>
            <div className="Img">
                <div className="col-md-6">
                    <img className="img-fluid" src={logImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;