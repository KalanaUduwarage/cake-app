const RegisterForum = () => {
    return ( 
        <div className="RegisterForum">
        <form className="form-register">
            <h2 className="form-register-heading"> Please Provide Your Details </h2>
            <br/>
            <div className="register" style={{  
                    color: 'white', 
                    backgroundColor: '#f1356d',
                    borderRadius: '10px',
                    marginLeft: '300px',
                    marginRight: '300px',
                    borderBlockWidth: '0px',
                    padding: '5px' }}>

            <label for="inputEmail" className="sr-only" style={{color:'white'}} >  Email address <p>  </p></label>
            <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autofocus />
            <br/>
            <br/>
            <label for="inputPassword" className="sr-only" style={{color:'white'}}> Password <p>  </p></label>
            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
            <br/>
            <br/>
            <label for="inputPasswordAgain" className="sr-only" style={{color:'white'}}> Re_enter Password <p>  </p></label>
            <input type="password" id="inputPasswordAgain" className="form-control" placeholder="Password" required />
            <br/>
            <br/>
            <label for="Address" className="sr-only" style={{color:'white'}}> Address <p>  </p> </label>
            <input type="address" id="inputAddress" className="form-control" placeholder="Address" required />
            <br/>
            <br/>
            <label for="inputPhoneNum" className="sr-only" style={{color:'white'}} >  Phone Number <p>  </p> </label>
            <input type="text" id="inputPhone" className="form-control" placeholder="Phone Number" required autofocus />
            <br/>
            <br/>
            <button className="btn btn-lg btn-primary btn-block" type="button" > Sign Up</button>
            </div>
        </form>    
    </div>
     );
}
 
export default RegisterForum;