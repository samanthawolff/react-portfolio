import React, { useState } from 'react'
import Modal from '../Modal';


const PhotoList = ({ category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentPhoto, setCurrentPhoto] = useState();

    const [photos] = useState([
        {
            name: "Run Buddy",
            category: "portfolio",
            description: "Run Buddy landing page using HTML and CSS."
        },
        {
            name: "Password Generator",
            category: "portfolio",
            description: "A password generator made using HTML, CSS, and Javascript."
        },
        {
            name: "Work Day Scheduler",
            category: "portfolio",
            description: "A time utilizing schedule to help keep track of to-do's and tasks. Made using HTML, CSS, and Javascript."
        },
        {
            name: "Cool Suduko",
            category: "portfolio",
            description: "A randomly generated sudoku puzzle made using HTML, CSS, Javascript, and a suduko API."
        },
        {
            name: "Sikester",
            category: "portfolio",
            description: "An online forum used to chat, share, and socialize. Made using HTML, CSS, Javascript, Node, and MySQL."
        },
        {
            name: "ReadMe Generator",
            category: "portfolio",
            description: "A professional ReadMe generator used from the terminal and made using various Node packages."
        }
    ]);
  
    const currentPhotos = photos.filter((photo) => photo.category === category);

    const toggleModal = (image, i) => {
      setCurrentPhoto({...image, index: i})
      setIsModalOpen(!isModalOpen);
    };
  
    return (
      <div>
        {isModalOpen && ( <Modal currentPhoto={currentPhoto} onClose={toggleModal} /> )}
        <div className="flex-row">
          {currentPhotos.map((image, i) => (
            <img
              src={require(`../../assets/portfolio-img/${category}/${i}.jpg`)}
              alt={image.name}
              className="img-thumbnail mx-1"
              onClick={() => toggleModal(image, i)}
              key={image.name}
            />
          ))}
        </div>
      </div>
    );
  };


export default PhotoList;