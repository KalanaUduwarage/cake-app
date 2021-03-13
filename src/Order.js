const Order = ({ orders,removeOrder}) => {
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
        </div>
     );
}
 
export default Order;