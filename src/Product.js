//import {  useState } from "react";
import ProductItems from "./ProductItems";

const Product = () => {
    
    const [product]=([
        {title:"Chicken Pastry",imageUrl:"IMG1",price:"rs.60.00",id:1 },
        {title:"Cake Piece",imageUrl:"",price:"rs.1000.00",id:2 },
        {title:"Chicken Pastry",imageUrl:"",price:"rs.60.00",id:3 }
    ])
    
    
    return ( 
        <div className="product-view">
            <ProductItems product={product}/>
        </div>
     );
}
 
export default Product;