import { Switch, Route } from 'react-router-dom'
import React from 'react'

import './Content.css'
import Anime from '../../views/anime/Anime'
import Manga from '../../views/manga/Manga'
import Favoritos from '../../views/favoritos/Favoritos'

const Content = props => (

    <div className="Content">
        <Switch>
            <Route path="/Anime">
                <Anime />
            </Route>
            <Route path="/Manga">
                <Manga />
            </Route>
            <Route path="/Favoritos">
                <Favoritos />
            </Route>
        </Switch>
    </div>
)

export default Content