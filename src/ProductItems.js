const ProductItems = (props) => {
const pros=props.pro;
 
    return ( 
        <div className="productItem-view">
            <h2>Items</h2>
                <div className="Item-view" key={pros.id}>
                    <h4>{pros.title}</h4>
                    <img src={pros.img} alt="TheImage"/>
                    <h5>{pros.price}</h5>
                    <br/>
                    <button className="addToCart" onClick={()=> props.addItem(pros.id) }><h3>Add to Cart</h3></button>
                </div>
        </div>
     );
}
 
export default ProductItems;
