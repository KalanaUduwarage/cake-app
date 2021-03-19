const AddNewProduct = () => {
    return ( 
    <div className="addProduct">
        <form  className="add-new-product">
            <h4>Name :</h4>
            <input type="text" id="nameOfItem"/>
            <h4>image :</h4>
            <input type="file" id="image"/>
            <h4>Price :</h4>
            <input type="text" id="price"/>
            <br/>
            <button><h3>Add To List</h3></button>
        </form>
    </div>
     );
}
 
export default AddNewProduct;