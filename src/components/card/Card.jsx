import React from 'react'
import Styles from './Card.module.css';

const Card = props => {

    return (
        <div className={Styles.Card} onClick={props.onClick}>
            <img className={Styles.Img} src={props.img} />
            <h2 className={Styles.Title}>{props.title}</h2>
        </div>
    )
}

export default Card