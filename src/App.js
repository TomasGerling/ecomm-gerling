import NavBar from "./Components/NavBar";
import "./App.css"
<<<<<<< HEAD
=======
import ItemDetailContainer from "./Components/Containers/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
>>>>>>> develop
import ItemListContainer from "./Components/Containers/ItemListContainer"
<<<<<<< HEAD
import { BrowserRouter, Route, Routes } from "react-router-dom";
=======
import Cart from "./Components/Cart"
>>>>>>> develop

const App = () => {
    return(
        <BrowserRouter>
        <NavBar />
        <Routes>
<<<<<<< HEAD
            <Route path='/' element={<ItemListContainer />}/>
            {/* <Route path='/category/:id' element={<ItemListContainer />}/> */}
        </Routes>
        <ItemListContainer/>
=======
            <Route exact  path="/" element={<ItemListContainer greeting="Productos"/>}  />
            <Route exact path="/category/:id" element={<ItemListContainer greeting ="Categoria:"/>} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} />
        </Routes>
>>>>>>> develop
        </BrowserRouter>
    )
}

export default App