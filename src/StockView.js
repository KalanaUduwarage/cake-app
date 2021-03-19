import { Link } from 'react-router-dom';
import Stock from "./Stock";

const StockView = ({stocks,updateStocks,removeStock}) => {

console.log(stocks);

    return ( 
        <div className="stock-view">
             {stocks.map(stocks=>(
                <Stock stock={stocks} updateStocks={updateStocks} removeStock={removeStock} />
                ))
            }
            <br/>
            <Link to="/AddNewStock"><button id="newItem"><h3>Add New Item</h3></button> </Link>
            <br/>
        </div>     
        );
}
 
export default StockView;