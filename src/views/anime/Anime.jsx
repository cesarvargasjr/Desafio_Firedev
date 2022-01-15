import React, { useEffect, useState } from "react";
import axios from "axios";
import './Anime.css'

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


    /* Favoritar algum card */
    /* const favoritar = () => {
        alert(`FAVORITO`);
        {<img src="logoFavoritos.svg" />}
      }; onClick={favoritar}*/

    return (
        <div /* className="App" */>
            <h1 className="Title">Animes mais populares</h1>
            <div className="Content">
                {posts.map((anime, key) => {
                    return (
                        <div className="Card"  key={key}>
                            <img src={anime.attributes.posterImage.small} />
                            <h2>{anime.attributes.titles.en_jp}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Anime