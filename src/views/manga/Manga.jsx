import React, { useEffect, useState } from "react";
import axios from "axios";
import './Manga.css'

const Manga = props => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/manga")
            .then((response) => {
                setPosts(response.data.data)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])

    return (
        <div /* className="App" */>
            <h1 className="Title">Mangas mais populares</h1>
            <div className="Content">
                {posts.map((manga, key) => {
                    return (
                        <div className="Card" key={key}>
                            <img src={manga.attributes.posterImage.small} />
                            <h2>{manga.attributes.titles.en_jp}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Manga