//import {  useState } from "react";
import ProductItems from "./ProductItems";

const Product = (props) => {
    return ( 
        <div className="product-view">
             {props.product.map(product=>(
              <ProductItems pro={product} key={product.id} addItem={props.addItem} />
            ))}
        </div>
     );
}
 
export default Product;