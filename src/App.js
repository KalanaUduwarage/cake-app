import Navbar from './Navbar';
import Home from './Home';
import Singup from './Signup';
import Product from "./Product";
import RegisterForum from './RegisterForum';
import Cart from './Cart';
import Admin from "./Admin";
import Orders from "./Orders";
import StockView from "./StockView";
import AddNewStock from "./AddNewStock";
import AddNewProduct from "./AddNewProduct";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from "react";


function App() {
  
  let PRODUCT = [
    { title: 'Butter Cake', image: './IMG/IMG1', price: 'rs.60.00', id: 1 },
    { title: 'Chocolate Cake', image: './IMG/IMG1', price: 'rs.60.00', id: 2 },
    { title: 'Strawberry Cake', image: './IMG/IMG1', price: 'rs.60.00', id: 3},
    { title: 'Tres-leches', image: './IMG/IMG1', price: 'rs.60.00', id: 4},
    { title: 'Strawberry Cheese Cake', image: './IMG/IMG1', price: 'rs.60.00', id: 5},
    { title: 'Chocolate Cheese Cake', image: './IMG/IMG1', price: 'rs.1500.00', id: 6},
    { title: 'Chocolate gateau', image: './IMG/IMG1', price: 'rs.1000.00', id: 7}
  ];

  let ORDER = [
    {id: 1,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura' , status:"Wait"},
    {id: 2,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"},
    {id: 3,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"},
    {id: 4,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"},
    {id: 5,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"},
    {id: 6,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"},
    {id: 7,cart:'b1,b2,p1,p2',email: 'abc@def.com', phno: '0771234567', adress: 'panadura', status:"Wait"}
  ];

  
  let PSTK = [
    {id: 1,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 2,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 3,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 4,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 5,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 6,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0},
    {id: 7,name:'baloons',date: '2021', supplier: 'abcdCompany', qty:0}
  ];

  let [pstock,setPstock]=useState(PSTK);

  let [oder,setOrder]=useState(ORDER);

  let [cartId,setCartId]=useState([]);
  
  let [pp,setPp]=useState([]);
  
  //let [quantity,setQuantity]=useState([]);
  

  const addItem = (id) =>{
    cartId.push(id);
    setCartId(cartId);
    let prd = PRODUCT.filter(pr => pr.id === id);
    prd.forEach(item=>{
      item = {...item,qty:0};
      pp.push(item);
      setPp(pp);
    })
    //console.log(pp);

    //console.log("cart id:"+ JSON.stringify(pp));
  }

  const updateItem =(q,id)=>
  {
    pp.forEach(item=>{
      if(item.id===id)
      {
       item.qty=q;
       setPp(pp);
      }
    })
    //console.log(pp);
  }

  const remove = (id) => {
    const rm = pp.filter(qqq => qqq.id !== id);
    //console.log(rm)
    setPp(rm);
  }

  const removeOrder = (id) => {
    const rmv = oder.filter(qqq => qqq.id !== id);
    setOrder(rmv);
  }

  const updateOrders = (id,st) =>{
    //console.log('id:'+id);
    //console.log('st:'+st);
    oder.forEach(item=>{
      if(item.id===id)
      {
       item.status=st;
       setOrder(oder);
       //console.log("item status:"+item.status); 
      }
    })
     //console.log(oder);    
  }
  
  const updateStocks = (id,qt) =>{
    console.log('id:'+id);
    console.log('qty:'+qt);
  
    var dt = new Date();

    pstock.forEach(item=>{
      if(item.id===id)
      {
       item.qty=qt;
       item.date=dt.toDateString();
       setPstock(pstock);
      }
    })
     console.log(pstock);    
  }

  const removeStock = (id) => {
    const rmv = pstock.filter(qqq => qqq.id !== id);
    setPstock(rmv);
  }

  /*const handleUpdate=(id,status)=>{

  }*/

  /*const  handleUpdateStock=(id,qty,dt)=>
  { 

  }*/

   /*  const click= (q,id)=>{
  //let quantity = product.find()
  let arr = product;
  arr.forEach(item =>{
    if(item.id===7){
      item = ({...item,qty:"10"});
      item.push({qty:"10"});
      //setProduct(item);
      item.qty = 10;
      setProduct(arr);
    }
  })
  */
// const [cart,setCart] = useState([]);
 /*const update = () =>{
 }
 const additem
 const deleteitem
 const deleteCart*/

  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home />
                </Route> 
              <Route path="/Signup">
                  <Singup />    
              </Route>
              <Route exact path="/RegisterForum">
                  <RegisterForum/>    
              </Route>
              <Route exact path="/Product">
                  <Product product={PRODUCT} addItem={addItem}/> 
              </Route>
              <Route exact path="/Cart">
                <Cart product={pp} updateItem={updateItem} remove={remove}/>
              </Route>
              <Route exact path="/Admin">
                <Admin />
              </Route>
              <Route exact path="/Orders">
                <Orders orders={oder} removeOrder={removeOrder} updateOrders={updateOrders}/>
              </Route>
              <Route exact path="/StockView">
                <StockView stocks={pstock} updateStocks={updateStocks} removeStock={removeStock} />
              </Route>
              <Route exact path="/AddNewStock">
                <AddNewStock />
              </Route>
              <Route exact path="/AddNewProduct">
                <AddNewProduct />
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;


