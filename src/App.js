import NavBar from "./Components/NavBar";
import "./App.css"
// import ItemDetailContainer from "./Containers/ItemDetailContainer";
import ItemListContainer from "./Components/Containers/ItemListContainer"

const App = () => {
    return(
        <>
        <NavBar />
        <ItemListContainer/>
        </>
    )
}

export default App