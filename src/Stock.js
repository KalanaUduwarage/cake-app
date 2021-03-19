import { useState } from "react";
const Stock = ({stock,updateStocks,removeStock}) => {
    //{id: 1,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},

    //const st=[stock];
    console.log('stk:'+stock)
    let [qty,setQty]=useState(stock.qty);
  
    const handlePlus = (qty) => {
        qty += 1;
        setQty(qty);
      }
    
      const handleMinus = (qty) => {
        qty -= 1;
        setQty(qty);
      }

    return ( 
        <div className="Stock-view">
            {stock.id} | {stock.name} | {stock.date} | {stock.supplier} | 
            <br/>
            <br/>
            <button className="plus" onClick={()=>handlePlus(qty)}><h3>+</h3></button>
            <h3 className="qty">Quantity: {qty}</h3>
            <button className="minus" onClick={()=>handleMinus(qty)}><h3>-</h3></button>
            <br/>
            <br/>
            <button className="Update" onClick={()=>updateStocks(stock.id,qty)}><h3>Update</h3></button>
            <br/>
            <br/>
            <button className="Update" onClick={()=>removeStock(stock.id)}><h3>Remove</h3></button>
            <h5>______________________________________________________________________________</h5>
        </div>
     );
}
 
export default Stock;