import { useState } from "react";

const CartItem = (props) => {

    let pr = props.pro;
    
   

    const arr= Object.values(pr);
    
    let [qty,setQty]=useState(0);

    const handlePlus = (qty) => {
        qty += 1;
        setQty(qty);
      }
    
      const handleMinus = (qty) => {
        qty -= 1;
        setQty(qty);
      }


        return ( 
            <div className="CartItem-view"> 
                    <div className="Item-view" >
                        <h4>{arr[0]}</h4>
                        <img src={arr[1]} alt="TheImage"/>
                        <h5>{arr[2]}</h5>
                        <br/>
                        <button className="plus" onClick={()=>handlePlus(qty)}><h3>+</h3></button>
                        <h3 className="qty">{qty}</h3>
                        <button className="minus" onClick={()=>handleMinus(qty)}><h3>-</h3></button>
                        <br/>
                        <button className="addToCart" onClick={()=>props.updateItem(qty,arr[3]),()=>{alert("Quantity Updated for:"+arr[0])}} ><h3>Confirm</h3></button>
                        <button className="addToCart" onClick={()=>props.remove(arr[3])} ><h3>Remove</h3></button>
                    </div>
                    </div>
         );
    }
     
    export default CartItem;
    