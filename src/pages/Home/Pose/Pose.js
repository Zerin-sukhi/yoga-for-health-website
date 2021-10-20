import React from 'react';
import { Link } from 'react-router-dom';
import './pose.css';

const Pose = ({ pose }) => {
    const { id, name, img, Description } = pose;
    return (
        // <div>
        //     <img src={img} alt="" />
        //     <h3>{name}</h3>
        //     <p className="px-3">{Description}</p>
        //     <Link to={`/booking/${id}`}>
        //         <button>Book Class {name.toLowerCase()}</button>
        //     </Link>
        // </div>
        <div className="card">
            <img src={img} className="cardImg" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{Description}</p>
                <Link to={`/booking/${id}`}>
                    <button className="logiN">Class For:{name.toLowerCase()}</button>
                </Link>
            </div>
        </div>
    );
};

export default Pose;