import React from 'react';
import img1 from '../../images/4.png';
import './About.css';

const About = () => {
    return (
        <div>
            <h2 className="about">What is Yoga?</h2>
            <p>More than a physical workout, yoga is a full mind and body exercise.</p>
            <div className="yoga">
                <div><img className="pic" src={img1} alt="" /></div>
                <div className="para">
                    <h4>Yoga 101</h4>
                    <p className="paragraph">A set of specific exercises, called poses, combined with specific breathing techniques and meditation principles are the building blocks of a yoga class.

                        The benefits of a regular yoga practice are wide-ranging. In general, a complete yoga workout can help keep your back and joints healthy, improve your overall posture, stretch and strengthen muscles and improve your balance, says Roger Cole, Ph.D., a psychobiologist and certified Iyengar yoga teacher.</p></div>
            </div>
        </div>
    );
};

export default About;