import React, { useEffect, useState } from "react";
import axios from "axios";
import './Anime.css';

/* import Card from "../../components/card/Card"; */

const Anime = props => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/anime")
            .then((response) => {
                setPosts(response.data.data)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])


    /* FAVORITAR CARD */
    const favoritar = () => {
        alert(`FAVORITO`);
        {/* <img src="favoritarCard.svg" /> */}
    };  


    return (
        <div>
            <h1>Animes mais populares</h1>
            <div className="Content">
                {posts.map((anime, key) => {
                    return (
                        <div className="Card" key={key}>
                            <img onClick={() => favoritar()} src={anime.attributes.posterImage.small} />
                            <h2>{anime.attributes.titles.en_jp}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Anime