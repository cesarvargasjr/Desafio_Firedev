import React from "react";
import './Modal.css'

const Modal = ({ id = 'modal', onClose = () => { }, children }) => {

    const hadleOutsideClick = (e) => {
        if (e.target.id === id) onClose();
    }

    return (
        <div id={id} className="Modal" onClick={hadleOutsideClick}>
            <div className="Container">
                <button className="FavoritarCard" onClick={onClose} src="iconHeart.svg"></button>
                <div className="Description">
                    <h4 className="Sinopse">Sinopse</h4>
                    {/* <h4 className="Posicao">Posição</h4> */}
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Modal