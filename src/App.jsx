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

/* https://kitsu.io/api/edge/anime */

/* https://kitsu.io/api/edge/manga */