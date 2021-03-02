const RegisterForum = () => {
    return ( 
        <div className="RegisterForum">
        <form className="form-register">
            <h2 className="form-register-heading"> Please Provide Your Details </h2>
            <br/>
            <div className="register" style={{  
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
            <label for="inputPasswordAgain" className="sr-only" style={{  
                    color: 'white'}}> Re_enter Password </label>
            <input type="password" id="inputPasswordAgain" className="form-control" placeholder="Password" required />
            <br/>
            <label for="Address" className="sr-only" style={{  
                    color: 'white'}}> Address </label>
            <input type="address" id="inputAddress" className="form-control" placeholder="Address" required />
            <br/>
            </div>
            <br/>
            <button className="btn btn-lg btn-primary btn-block" type="button" > Sign Up
            </button>
        </form>    
    </div>
     );
}
 
export default RegisterForum;