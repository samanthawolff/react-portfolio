import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {
   const {
       categories = [],
       setCurrentCategory,
       currentCategory,
   } = props;

   useEffect(() => {
       document.title = capitalizeFirstLetter(currentCategory.name);
   }, [currentCategory]);

    return (
        <header className="flex-row px-1">
            <h2>
                <a data-tesid="link" href='/'>
                    <span role='img' aria-label='heart'>˚ʚ♡ɞ˚</span> Samantha Wolff <span role='img' aria-label='heart'>˚ʚ♡ɞ˚</span>
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li className="mx-2">
                        <a data-tesid="about" href="#about">
                            About Me
                        </a>
                    </li>
                    {categories.map((category) => (
                        <li className={`mx-1 ${
                            currentCategory.name === category.name && 'navActive'
                            }`} key={category.name}>
                            <span onClick={() => {setCurrentCategory(category)}}>
                                {capitalizeFirstLetter(category.name)}
                            </span>
                        </li>
                    ))}
                    <li className="mx-2">
                        <span>Contact</span>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Nav;