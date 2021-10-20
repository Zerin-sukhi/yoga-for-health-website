import React from 'react';
import mediImg from '../../images/5.png';
import './Meditation.css';

const Meditation = () => {
    return (
        <div>
            <h2 className="about">Yoga And Meditation</h2>
            <p>Before yoga was a popular physical exercise, it was, for thousands of years, mainly a meditation practice.</p>
            <div className="yoga">
                <div className="paragraph">
                    <p><span>Mindfulness with Yoga</span>
                        In a yoga class, as you learn to do yoga poses, you will be instructed to notice your breath and the way your body moves during the exercises. The is the foundation of a mind-body connection.

                        A well-balanced series of yoga exercises gives you the opportunity to scan your entire body, noting how you feel as you move through the poses. You may begin to realize, for example, that one side of your body feels different than the other during a stretch, or that it’s easier to balance on your right leg, or that certain poses helps ease tension in your neck.

                        This is how yoga turns physical exercises into tools to help students become more mindful and even learn to meditate.</p>
                </div>
                <div>
                    <img className="pic" src={mediImg} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Meditation;