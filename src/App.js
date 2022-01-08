import React, { useEffect, useState } from "react";
import './styles/App.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Menu from "./components/layout/Menu";
import axios from "axios";

/* import api from "./services/api"; */

function App() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get("https://alemdocodigo.herokuapp.com/list_posts")
            .then((response) => {
                setPosts(response.data.posts)
            }).catch(() => {
                console.log("Erro!")
            })
    }, [])

    return (
        <div /* className="App" */>
            <Router>
                <Menu />
            </Router>
            <h1 className="Title">Animes mais populares</h1>
            <div className="Catalago">
                {posts.map((post, key) => {
                    return (
                        <div className="Card" key={key}>
                            <div className="Card-body" >
                                <h1>{post.title}</h1>
                                <div className="Line"></div>
                                <h2>{post.content}</h2>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App