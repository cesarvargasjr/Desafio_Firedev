import React, { useEffect, useState } from "react";
import axios from "axios";
import './Anime.css';

import Modal from "../../components/modal/Modal";

const Anime = props => {

    const [modalVisible, setModalVisible] = useState(false);

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://kitsu.io/api/edge/anime")
            .then((response) => {
                setPosts(response.data.data)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])

    return (
        <div>
            <h1>Animes mais populares</h1>
            <div className="Content">
                {posts.map((anime, key) => {
                    return (
                        <div className="Card" key={key}>
                            <img onClick={() => setModalVisible(true)} src={anime.attributes.posterImage.small} />
                            {modalVisible ? (
                                <Modal onClose={() => setModalVisible(false)}>
                                    <h3>{anime.attributes.titles.en_jp}</h3>
                                    <p>{anime.attributes.synopsis}</p>
                                    <img src={anime.attributes.posterImage.tiny} />
                                </Modal>
                            ) : null}
                            <h2>{anime.attributes.titles.en_jp}</h2>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Anime


/* FAVORITAR CARD */
/* const favoritar = () => {
    alert(`FAVORITO`);
};   */