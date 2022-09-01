import NavBar from "./Components/NavBar";
import ItemList from "./Components/ItemList"
import infoGames from "./utils/Item";
import "./App.css"

const App = () => {
    return(
        <>
        <NavBar />
        <ItemList item={infoGames}/>
        </>
    )
}

export default App