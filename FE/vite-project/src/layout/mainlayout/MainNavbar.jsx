import { Link } from 'react-router-dom'
import "./MainNavbar.scss"

function MainNavbar() {
  return (
    <header>
        <nav>
            <div className='nav_div_left'>
                <p>Pulse.</p>
            </div>
            <div className='nav_div_center'>
                <ul>
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About us</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                    <li><Link to={"/basket"}>Basket</Link></li>
                </ul>
            </div>
            <div className='nav_div_right'>
                <p>Reservations <i className="fa-solid fa-phone"></i>  652-345 3222 11</p>
            </div>
            <i className="fa-solid fa-bars"></i>
        </nav>
    </header>
  )
}

export default MainNavbar