import React from 'react';


function Modal({currentPhoto}) {
    const {name, description, category, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/portfolio-img/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button type="button">Exit</button>
            </div>
        </div>
    )
}


export default Modal;