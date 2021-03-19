const AddNewStock = () => {
    return ( 
        <div className="addStock">
            <form  className="add-new-stock">
                <h4>Name :</h4>
                <input type="text" id="nameOfItem"/>
                <h4>Supplier :</h4>
                <input type="text" id="supplier"/>
                <h4>Date :</h4>
                <input type="date" id="date"/>
                <h4>Quantity :</h4>
                <input type="text" id="quantity"/>
                <br/>
                <button><h3>Add To List</h3></button>
            </form>
        </div>
     );
}
 
export default AddNewStock;