
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import logo from '../../../images/logo.png';
import './Header.css';

const Header = () => {
    const { logOut, user } = useAuth();
    console.log(user);
    return (
        <div >
            <Navbar className="head">
                <Container>
                    <div className="header">
                        <div className="logo">
                            <img className="sukhi" src={logo} alt="" />
                            <Navbar.Brand to="/home" className="brand">Yoga-For-Health</Navbar.Brand>
                        </div>

                        <Nav className="home">
                            <Link to="/home"><span className="nav">Home</span></Link>
                            <Link to="/about"><span className="nav">About Yoga</span></Link>
                            <Link to="/meditation"><span className="nav">Meditation</span></Link>
                            <Link to="/articles"><span className="nav">Articles</span></Link>
                            {
                                user.email ?
                                    <Link to="/login"><span className="nav">
                                        <button onClick={logOut} className="btn btn-success">Log Out</button>
                                    </span></Link>
                                    :
                                    <Link to="/login"><span className="nav">Log In</span></Link>
                            }
                            {
                                !user.email

                                &&
                                <Link to="/register"><span className="nav">Register</span></Link>
                            }

                        </Nav>

                    </div>

                </Container>
            </Navbar>
            <div>

                {user.email ?
                    <span> Welcome: {user?.email} </span>
                    :
                    <span>{user?.displayName}</span>
                }



            </div>

        </div>
    );
};

export default Header;