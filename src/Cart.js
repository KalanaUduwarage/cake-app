//import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({product,updateItem,remove}) => {

console.log(product);
 /* Array.from(product).forEach(prd => {
    cartId.forEach(ID => {
      if(prd.id===ID){
        //console.log(prd);
        prod.push(prd);
      }
    });
  });
  //console.log(prod);
 */
     return(
       
        
      <div className="cartItem">
        {product.map(prod=>(
         <CartItem pro={prod} updateItem={updateItem} remove={remove} />
       ))}
      </div>
     )
}
 
export default Cart;

