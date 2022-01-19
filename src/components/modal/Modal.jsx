import React from "react";
import Styles from "./Modal.module.css"

/* const Modal = ({ id = 'modal', onClose = () => { }, children }) => { */

const Modal = props => {

    const hadleOutsideClick = (e) => {
        if (e.target.id === "modal") props.onClose();
    }

    return (
        <div id="modal" className={Styles.Modal} onClick={hadleOutsideClick}>
            <div className={Styles.Container}>

                <div className={Styles.ModalBody}>
                    <div className={Styles.ImgBox}>
                        <img className={Styles.ImgBorder} src={props.img} />
                    </div>
                    <div className={Styles.TextBox}>
                        <div className={`${Styles.TitleBox} ${Styles.ApplyFlex}`}>
                            <h1 className={Styles.TitleModal}>
                                {props.title}
                            </h1>
                            <img src="iconHeart.svg" />
                        </div>
                        <div className={`${Styles.ApplyFlex} ${Styles.RankingBox} `}>
                            <p className={Styles.TextPosition}>
                                Posição: {props.position}
                            </p>
                            <p className={Styles.TextAvaliacao}>
                                <img className={Styles.ImgStar} src="iconStar.svg" />
                                Avaliação: {props.avaliacao}
                            </p>
                        </div>
                        <div>
                            <p className={Styles.TextCapitulos}>
                                Capítulos/Episódios: {props.capitulos}
                            </p>
                        </div>
                        <div className={Styles.TextSinopse}>
                            <h1 className={Styles.TitleSinopse}>
                                Sinopse
                            </h1>
                            {props.sinopse}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal