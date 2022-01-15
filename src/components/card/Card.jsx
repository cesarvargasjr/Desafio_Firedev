/* import React, { useEffect, useState } from "react"; */
import './Card.css';

const Card = props => {

    return (
        <div className="Card">
            <img src={anime.attributes.posterImage.small} />
            <h2>{anime.attributes.titles.en_jp}</h2>
        </div>
    )
}

export default Card