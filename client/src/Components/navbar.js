import '../styles/navbar.css';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <div className="navbar">
            <nav>
               <Link to={'/'}><a href="">Home</a></Link> 
               <Link to={'/lists'}><a href="">Your LIst</a></Link>
              <Link to={'/totalsong'}><a href="">Total Song</a></Link>  
               <Link to={'/artist'}><a href="">Artist</a></Link> 
              <Link to={'/album'}> <a href="">Album</a></Link> 
                <Link to={'/genre'}><a href="">Genre</a></Link>
            </nav>
        </div>
     );
}
 
export default Navbar;