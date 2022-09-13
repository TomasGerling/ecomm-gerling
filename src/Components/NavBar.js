import logo from '../Assets/logo.jpg';
import './NavBar.css';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';


function NavBar() {
  return (
    <header>
      <div className='NavBar'>
        <div className='shopLogo'>
          <img src={logo} alt="x" className='logo'></img>
          <Link className='navbar-brand' to='/' ><button className='buttonNavBar'>RetroGames Shop</button></Link>
        </div>
          <div className='gamesCategory' id='navbarSupportedContent'>
            <ul className='navbar-nav mr-auto '>
              <li className='nav-item active'>
                <Link className='nav-link' to='/'><button className='buttonNavBar'>Todos</button></Link>
              </li>
              <li className='nav-item active'>
                <Link className='nav-link' to='/category/1'><button className='buttonNavBar'>Cuadros</button></Link>
              </li>
              <li className='nav-item active'>
                <Link className='nav-link' to='/category/2'><button className='buttonNavBar'>Tazas</button></Link>
              </li>
              <li className='nav-item active'>
                <Link className='nav-link' to='/category/3'><button className='buttonNavBar'>Peluches</button></Link>
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
