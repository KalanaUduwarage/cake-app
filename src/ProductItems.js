/* eslint-disable jsx-a11y/img-redundant-alt */
const ProductItems = (props) => {
    const product=props.product;
    return ( 
        <div className="productItem-view">
            {product.map(product=>(
                <div className="Item-view" key={product.id}>
                    <h4>{product.title}</h4>
                    <h5>{product.price}</h5>
                </div>
            ))}
        </div>
     );
}
 
export default ProductItems;
