import React from 'react';
import ProfilePic from '../../assets/profile/bitmoji-pic.png';


function About() {
    return (
        <section className="">
            <h1 id="about">About Me</h1>
            <img src={ProfilePic} alt="Samantha Avatar" className="profile-pic"></img>

        </section>
    );
}


export default About;