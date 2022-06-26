import React from 'react';


const Modal = ({ onClose, currentPhoto }) => {
    const {name, description, category, index} = currentPhoto;

    return (
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img src={require(`../../assets/portfolio-img/${category}/${index}.jpg`)} alt="current category" />
                <p>{description}</p>
                <button onClick={onClose} type="button">Exit</button>
            </div>
        </div>
    )
}


export default Modal;