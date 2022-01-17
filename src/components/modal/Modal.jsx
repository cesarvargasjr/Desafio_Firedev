import React from "react";
import './Modal.css'

const Modal = ({ id = 'modal', onClose = () => {}, children }) => {

    const hadleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="Modal" onClick={hadleOutsideClick}>
            <div className="Container">
                <button /* className="FavoritarCard" */ onClick={onClose} /* src="favoritarCard.svg" */>X</button>
                <div /* className="Description" */>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal