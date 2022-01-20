import React from "react";
import Styles from "./Modal.module.css"

const Modal = props => {

    const hadleOutsideClick = (e) => {
        if (e.target.id === "modal") props.onClose();
    }

    return (
        <div id="modal" className={Styles.Modal} onClick={hadleOutsideClick}>
            <div className={Styles.Container}> {/* CONTAINER DO MODAL */}
                <div className={Styles.ModalBody}> {/* DIV INTERNA DO MODAL */}
                    <div className={Styles.ImgBox}> {/* DIV DA IMAGEM DO ANIME/MANGA */}
                        <img className={Styles.ImgBorder} src={props.img} />
                    </div>
                    <div className={Styles.TextBox}> {/* DIV DO TÍTULO DO ANIME/MANGA + ICONE DOS FAVORITOS */}
                        <div className={`${Styles.TitleBox} ${Styles.ApplyFlex}`}>
                            <h1 className={Styles.TitleModal}>
                                {props.title}
                            </h1>
                            <img src="iconHeart.svg" />
                        </div>
                        <div className={`${Styles.ApplyFlex} ${Styles.RankingBox}`}> {/* DIV DAS INFORMAÇÕES DE POSIÇÃO E AVALIAÇÃO */}
                            <p className={Styles.TextPosition}>
                                Posição: {props.position}
                            </p>
                            <p className={Styles.TextAvaliacao}>
                                <img className={Styles.ImgStar} src="iconStar.svg" />
                                Avaliação: {props.avaliacao}
                            </p>
                        </div>
                        <div> {/* DIV DOS CAPÍTULOS/EPISÓDEOS */}
                            <p className={Styles.TextCapitulos}> 
                                Capítulos/Episódios: {props.capitulos}
                            </p>
                        </div>
                        <div className={Styles.TextSinopse}> {/* DIV DA SINOPSE */}
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