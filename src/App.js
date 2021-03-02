import Navbar from './Navbar';
import Home from './Home';
import Singup from './Signup';
import Product from "./Product";
import RegisterForum from './RegisterForum';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
          <div className="content">
            <Switch>
              <Route exact path="/">
                  <Home/>
                </Route> 
              <Route path="/Signup">
                  <Singup/>    
              </Route>
              <Route exact path="/RegisterForum">
                  <RegisterForum/>    
              </Route>
              <Route exact path="/RegisterForum">
                  <Product/> 
              </Route>
            </Switch>
          </div>
      </div>
    </Router>
  );
}

export default App;


