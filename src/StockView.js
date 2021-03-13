import Stock from "./Stock";

const StockView = ({stocks}) => {

console.log(stocks);

    

    return ( 
        <div className="sock-view">
             {stocks.map(stocks=>(
                <Stock stock={stocks} />
                ))
            }
        </div>     
        );
}
 
export default StockView;