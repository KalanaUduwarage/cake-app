import Stock from "./Stock";

const StockView = ({stock}) => {

    console.log('st-view:'+stock);

    return ( 
        <div className="sock-view">
             {stock.map(stock=>(
                <Stock stock={stock} />
                ))
            }
        </div>     
        );
}
 
export default StockView;