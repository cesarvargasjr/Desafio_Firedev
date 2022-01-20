import React, { useEffect, useState } from "react";
import axios from "axios";

import Modal from "../../components/modal/Modal";
import Card from "../../components/card/Card";
import Styles from "./Anime.module.css";

const Anime = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const [animeData, setAnimeData] = useState({});

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/anime")
            .then((response) => {
                setPosts(response.data.data)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])

    const triggerModal = (anime) => {
        setModalVisible(true)
        setAnimeData(anime)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div>
            <h1 className={Styles.TitleAnime}>Animes mais populares</h1>
            <div className={Styles.Anime}>
                {posts.map((anime, key) => {
                    return (
                        <Card
                            img={anime.attributes.posterImage.tiny}
                            title={anime.attributes.titles.en_jp}
                            onClick={() => triggerModal(anime)}
                        />
                    )
                })}
            </div>
            {modalVisible ? (
                <Modal 
                    onClose={() => closeModal()}
                    img={animeData.attributes.posterImage.small}
                    sinopse={animeData.attributes.synopsis}
                    title={animeData.attributes.titles.en_jp}
                    position={animeData.attributes.popularityRank}
                    avaliacao={animeData.attributes.averageRating}
                    capitulos={animeData.attributes.episodeCount}
                />
            ) : null}
        </div>
    )
}

export default Anime