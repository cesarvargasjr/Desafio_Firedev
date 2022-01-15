import { BrowserRouter as Router } from 'react-router-dom'
import Menu from "./components/menu/Menu";
import Content from "./components/content/Content";

const App = props => {

    return (
            <div>
                <Router>
                    <Menu />
                    <Content />
                </Router>
            </div>
    )
}

export default App


/* function App() {

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
            <Router>
                <Menu />
            </Router>
            <h1 className="Title">Animes mais populares</h1>
            <div className="Catalago">
                {posts.map((anime, key) => {
                    return (
                        <div className="Card" key={key}>
                            <img src={anime.attributes.posterImage.small} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default App */


/* https://kitsu.io/api/edge/anime */

/* https://kitsu.io/api/edge/manga */