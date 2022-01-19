import React, { useEffect, useState } from "react";

import Styles from "./Favoritos.module.css"

const Favoritos = props => {

    return (
            <div className={Styles.Favoritos}>
                <h1 className={Styles.TitleFavoritos}>Seus animes favoritos</h1>
            </div>
    )
}

export default Favoritos