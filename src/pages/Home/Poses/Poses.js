import React, { useEffect, useState } from 'react';
import Pose from '../Pose/Pose';
import './Poses.css';

const Poses = () => {
    const [poses, setPoses] = useState([]);
    useEffect(() => {
        fetch('poses.json')
            .then(res => res.json())
            .then(data => setPoses(data));
    }, [])
    return (
        <div id="poses">
            <h2>10 poses that You Can Follow</h2>
            <div className="pose-container">{
                poses.map(pose => <Pose
                    key={pose.id}
                    pose={pose}
                >
                </Pose>)
            }
            </div>

        </div>
    );
};

export default Poses;