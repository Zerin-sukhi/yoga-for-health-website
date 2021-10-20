import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logImg from '../../../images/login.png';
import './Register.css';

const Register = () => {
    const { handleName, handleEmail, handlePassword, handleRegistration, error } = useAuth();
    return (
        <div className="registration">
            <div className="form">
                <form onSubmit={handleRegistration}>
                    <h3 className="text-success">Please Register</h3>
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
                    <button onClick={handleRegistration} type="submit" className="logiN">
                        Register
                    </button>
                    <div className="account">
                        <Link to="/login" className="signUp">Already Registered?</Link>
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

export default Register;