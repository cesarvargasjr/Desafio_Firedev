import React, { useEffect, useState } from "react";
import axios from "axios";

import Styles from "./Manga.module.css"
import Card from "../../components/card/Card";
import Modal from "../../components/modal/Modal";

const Manga = props => {

    const [modalVisible, setModalVisible] = useState(false);
    const [mangaData, setMangaData] = useState({});

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/manga")
            .then((response) => {
                setPosts(response.data.data)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])

    const triggerModal = (manga) => {
        setModalVisible(true)
        setMangaData(manga)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    return (
        <div>
            <h1 className={Styles.TitleManga}>Mangas mais populares</h1>
            <div className={Styles.Manga}>
                {posts.map((manga, key) => {
                    return (
                        <Card
                            img={manga.attributes.posterImage.tiny}
                            title={manga.attributes.titles.en_jp}
                            onClick={() => triggerModal(manga)}
                        />
                    )
                })}
            </div>
            {modalVisible ? (
                <Modal 
                    onClose={() => closeModal()}
                    img={mangaData.attributes.posterImage.small}
                    sinopse={mangaData.attributes.synopsis}
                    title={mangaData.attributes.titles.en_jp}
                    position={mangaData.attributes.averageRating}
                    avaliacao={mangaData.attributes.popularityRank}
                    capitulos={mangaData.attributes.episodeCount}
                />
            ) : null}
        </div>
    )
}

export default Manga