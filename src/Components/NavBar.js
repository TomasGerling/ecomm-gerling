import logo from './logo.jpg';
import './NavBar.css';

function App() {
  return (
    <header>
      <div className="NavBar">
        <div className="shopLogo">
          <img src={logo} className="logo"></img>
          <a className="navbar-brand" href="#"><button className='buttonNavBar'>RetroGames Shop</button></a>
        </div>
          <div className="gamesCategory" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
              <li className="nav-item active">
                <a className="nav-link" href="#"><button className='buttonNavBar'>Todos</button></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><button className='buttonNavBar'>2D</button></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><button className='buttonNavBar'>3D</button></a>
              </li>
            </ul>
          </div>
          <div className='loginUser'>
            <p><a href='#'><button className='buttonNavBar'>Login</button></a></p>
          </div>
      </div>
    </header>
  );
}
export default App;
