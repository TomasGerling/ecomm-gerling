import NavBar from "./Components/NavBar";
import "./App.css"
import ItemListContainer from "./Components/Containers/ItemListContainer"
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path='/' element={<ItemListContainer />}/>
            {/* <Route path='/category/:id' element={<ItemListContainer />}/> */}
        </Routes>
        <ItemListContainer/>
        </BrowserRouter>
    )
}

export default App