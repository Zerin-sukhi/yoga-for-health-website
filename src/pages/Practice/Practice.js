import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Practice = () => {
    const { poseId } = useParams();
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('/poses.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    const ExactIteam = data.filter(td => td._id === poseId);
    return (
        <div>
            <h1>This is pose Detail Page </h1>
            <h3>Name : {ExactIteam[0]?.name}</h3>
            <h3>description : {ExactIteam[0]?.description}</h3>
        </div>
    );
};

export default Practice;