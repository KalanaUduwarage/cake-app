const Order = ({ orders,removeOrder,updateOrders}) => {
    return ( 
        <div className="orderview" key={orders.id} 
        style={{ color: 'black', 
        backgroundColor: '#ff78a0',
        borderRadius: '8px',
        marginLeft: '150px',
        marginRight: '150px',
        marginBottom:'3px',
        borderBlockWidth: '5px',
        padding: '10px'}}>
          {orders.id} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| {orders.email} &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; |{orders.phno}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; | {orders.cart}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  |{orders.adress}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;     
          <button onClick={()=>removeOrder(orders.id)}>Remove</button>
          {orders.status}
          <select id ='select'>
          <option value="dispatched" id='opt1'>Dispatched</option>
          <option value="Delivered" id='opt2'>Delivered</option>
          </select>
          <button onClick={()=>updateOrders(orders.id,document.getElementById('select').value)}>Update</button>
        </div>
     );
}
 
export default Order;