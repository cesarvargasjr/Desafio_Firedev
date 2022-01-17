import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (

    <nav className="Menu">
        <ul>
            <li>
                <img src="logoFiredev.svg" />
            </li>
            <li>
                <Link to="/Anime">ANIME</Link>
            </li>
            <li>
                <Link to="/Manga">MANGA</Link>
            </li>
        </ul>
        <div className="div">
            <input type="text" className="Input" />
            <a className="IconSearch">
                <img src="iconSearch.svg" />
            </a>
            <Link to="/Favoritos" className="IconFavorites" >
                <img src="iconFavorites.svg" />
            </Link>
        </div>
    </nav>
)

export default Menu