import { Link } from "react-router-dom";
const Signup = () => {
    return ( 
        <div className="signup">
            <form className="form-signin">
                <h2 className="form-signin-heading"> Please sign in </h2>
                <br/>
                <div className="sign" style={{  
                        color: 'white', 
                        backgroundColor: '#f1356d',
                        borderRadius: '8px',
                        marginLeft: '200px',
                        marginRight: '200px',
                        borderBlockWidth: '5px',
                        padding: '10px' }}>

                <label for="inputEmail" className="sr-only" style={{  
                        color: 'white'}} >  Email address </label>
                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
                <br/>
                <br/>
                <label for="inputPassword" className="sr-only" style={{  
                        color: 'white'}}> Password </label>
                <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                <br/>
                </div>
                <br/>
                <button className="btn btn-lg btn-primary btn-block" type="button"> Login
                </button>
                <br/>
                <br/>
                <Link to='/RegisterForum' className="btn btn-lg" > Sign in
                </Link >
                
            </form>    
        </div>
     );
}
 
export default Signup;