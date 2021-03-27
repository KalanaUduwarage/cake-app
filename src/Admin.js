import { Link } from "react-router-dom";
const Admin = () => {
    
    return ( 
        <div className="admin">
            <h2>Welcome Admin!!</h2>
            <br/>
            <br/>
            <Link to='/Orders'><button type="button">View Orders</button></Link>
            <br/>
            <br/>
            <Link to='/StockView'><button>View Stocks</button></Link>
            <br/>
            <br/>
            <Link to='/AddNewProduct'><button>Add New Product</button></Link>
        </div>
     );
}
 
export default Admin;