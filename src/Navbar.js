import { Link } from "react-router-dom";
import "./Navbar.css";


const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>Nilu&Ishu</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <div className="dropdown">
                    <p className="dropbtn">Products</p >
                    <div className="dropdown-content">
                        <Link to="/Product">Backery Items</Link>
                        <Link to="/Product">Party Items</Link>
                    </div>
                </div>
                <Link to="/Cart">Cart</Link>
                <Link to="/">About Us</Link>
                <Link to="/Signup" style={{ 
                            color: 'white', 
                            backgroundColor: '#f1356d',
                            borderRadius: '8px' 
                }}>Login/SignUp</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;