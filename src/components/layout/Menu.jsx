import './Menu.css'
import React from 'react'

/* import { Link } from 'react-router-dom' */

const Menu = props => (

    <nav className="Menu">
        <ul>
            <li>
                <img src="logoFiredev.svg" />
            </li>
            <li>
                <a href="">ANIME</a>
            </li>
            <li>
                <a href="">MANGA</a>
            </li>
        </ul>
        <div className="div">
            <input type="text" className="Input" />
            <a href="" className="IconPesquisa">
                <img src="iconPesquisa.svg" />
            </a>
            <a href="" className="IconFavoritos" >
                <img src="logoFavoritos.svg" />
            </a>
        </div>
    </nav>
)

export default Menu



{/* <nav className="Menu">
        <ul>
            <li>
                <a href=""><img src="logoFiredev.svg" /></a>
            </li>
            <li>
                <a href="">ANIME</a>
            </li>
            <li>
                <a href="">MANGA</a>
            </li>
            <li>
                <a href="">
                    <input type="text" className="Input"></input>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="logoFavoritos.svg" />
                </a>
            </li>
        </ul>
    </nav> */}




{/* <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/">
                        <img src="logoFiredev.svg" />
                    </Link>
                </li>
                <li>
                    <Link to="/">ANIME</Link>
                </li>
                <li>
                    <Link to="/">MANGA</Link>
                </li>
                <li>
                    <Link to="/">
                        <input type="text" className="Input"></input>
                    </Link>
                </li>
                <li>
                    <Link to="/">
                        <img src="logoFavoritos.svg" />
                    </Link>
                </li>
            </ul>
        </nav>
    </aside> */}