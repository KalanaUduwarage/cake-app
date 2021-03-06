import './ProductView.css'
import ProductItems from "./ProductItems";

const Product = (props) => {
    return ( 
        <div className="flex-container"  >
           
                 {props.product.map(product=>(
                  <ProductItems pro={product} key={product.id} addItem={props.addItem} />
                ))}
            
        </div>    
     );
}
 
export default Product;