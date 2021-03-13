import { useHistory } from "react-router-dom";
const StockSelect = ({stockSelect}) => {
    return ( 
        <div className="stock-select">
            <Link to='/StockView'><button id='b' onClick={()=>stockSelect('b')}>Bakery Items</button></Link>
            <br/>
            <br/>
            <Link to='/StockView'><button id='p' onClick={()=>stockSelect('p')}>Party Items</button></Link>
        </div>
     );
}
 
export default StockSelect;