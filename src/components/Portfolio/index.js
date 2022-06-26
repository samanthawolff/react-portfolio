import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import photo from '../../assets/portfolio-img/download.png';


function Portfolio(props) {
    const currentCategory = {
        name: "portfolio",
        description: "A short, but sweet, example of some of my previous projects",
    };

    return (
        <section>
            <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
            <p>{currentCategory.name}</p>
            <div>
                <img src={photo} alt="Portfolio Projects" className="img-thumbnail mx-1" />
            </div>
        </section>
    )
}


export default Portfolio;