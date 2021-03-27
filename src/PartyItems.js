import './ProductView.css'
import PartyItem from "./PartyItem";

const Product = (props) => {
    return ( 
        <div className="flex-container">
             {props.product.map(product=>(
              <PartyItem pro={product} key={product.id} addItem={props.addItem} />
            ))}
        </div>
     );
}
 
export default Product;

























