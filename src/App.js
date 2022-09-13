import NavBar from "./Components/NavBar";
import "./App.css"
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer from "./Components/Containers/ItemListContainer"

const App = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route exact  path="/" element={<ItemListContainer greeting="Productos"/>}  />
            <Route exact path="/category/:id" element={<ItemListContainer greeting ="Categoria:"/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        </Routes>
        </BrowserRouter>
    )
}

export default App