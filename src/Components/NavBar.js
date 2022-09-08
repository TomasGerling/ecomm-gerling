import logo from '../Assets/logo.jpg';
import './NavBar.css';
import CartWidget from './CartWidget';


function NavBar() {
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
                <a className="nav-link" href="#"><button className='buttonNavBar'>Cuadros</button></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><button className='buttonNavBar'>Llaveros</button></a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="#"><button className='buttonNavBar'>Peluches</button></a>
              </li>
            </ul>
          </div>
          <div className='cartWidget'>
            <CartWidget />
          </div>
      </div>
    </header>
  );
}
export default NavBar;
