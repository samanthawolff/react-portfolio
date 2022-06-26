import React from 'react';
import coverImage from '../../assets/cover/cover-img.png';


function About() {
    return (
        <section className="my-5">
            <img src={coverImage} className="my-2" style={{ width: '100%' }} alt='cover' />
            <h1 id="about">About Me</h1>
        </section>
    );
}


export default About;
