import { Link } from "react-router-dom";
const Admin = () => {
    
    return ( 
        <div className="admin">
            <h2>Welcome Admin!!</h2>
            <Link to='/Orders'><button type="button">View Orders</button></Link>
            <Link to='/StockSelect'><button>View Stocks</button></Link>
        </div>
     );
}
 
export default Admin;