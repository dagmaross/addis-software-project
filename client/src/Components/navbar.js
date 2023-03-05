
import { Link } from 'react-router-dom';
import{Navbars,Nav,Anchor}from'../styledComponent/create';
const Navbar = () => {
    return ( 
        <Navbars>
            <Nav>
               <Link to={'/'}><Anchor href="">Home</Anchor></Link> 
               <Link to={'/lists'}><Anchor href="">Your LIst</Anchor></Link>
              <Link to={'/totalsong'}><Anchor href="">Total Song</Anchor></Link>  
               <Link to={'/artist'}><Anchor href="">Artist</Anchor></Link> 
              <Link to={'/album'}> <Anchor href="">Album</Anchor></Link> 
                <Link to={'/genre'}><Anchor href="" style={{ textDecoration: 'none' }}>Genre</Anchor></Link>
            </Nav>
        </Navbars>
     );
}
 
export default Navbar;