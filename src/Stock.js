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
        <div className="Stock-view"
        style={{ color: 'black', 
        backgroundColor: '#ff78a0',
        borderRadius: '8px',
        marginLeft: '150px',
        marginRight: '150px',
        marginBottom:'3px',
        borderBlockWidth: '5px', padding: '10px',
        textAlign:'center'}}>
            {stock.id} &nbsp;&nbsp;&nbsp;&nbsp;| {stock.name} &nbsp;&nbsp;&nbsp;&nbsp;| {stock.date} &nbsp;&nbsp;&nbsp;&nbsp;| {stock.supplier} &nbsp;&nbsp;&nbsp;&nbsp;| &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="plus" onClick={()=>handlePlus(qty)}>+</button> &nbsp;&nbsp;&nbsp;&nbsp;
            Quantity: {qty} &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="minus" onClick={()=>handleMinus(qty)}>-</button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="Update" onClick={()=>updateStocks(stock.id,qty)}><h3>Update</h3></button>&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="Update" onClick={()=>removeStock(stock.id)}><h3>Remove</h3></button>
        
        </div>
     );
}
 
export default Stock;