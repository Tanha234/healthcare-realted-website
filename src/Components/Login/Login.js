import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import '../Login/login.css'
import login from '../../images/login-img.png'
import { Button } from 'react-bootstrap';




const Login = () => {
    const{signInWithGoogle,handleEvent,emailVery,passWord,error,toogleSing,isLogging,registerNewUser}=useAuth()
 
    return (
        <div className="login-page d-flex p-5">
            <div className="col-md-6">
                <img className="w-50 fluid" src={login} alt=""/>

            </div>
        <div className="col-md-6 ">
            <form onSubmit={handleEvent}>
            <h2 className="service-title">Please  {isLogging?'Login':'Register'}</h2>
            <input className="my-3 w-75" onChange={emailVery} type="email" name="" placeholder="Enter your email" id="" required />
            <br/>
            <input className="w-75" onChange={passWord} type="password" name="" placeholder="Enter your password" id="" required />

            <br/>
            <br/>
            
            <button className="px-5 py-1 my-1 rounded-3" onChange={registerNewUser}>Enter</button>
            <br/>
            <input onChange={toogleSing} type="checkbox" name="" id="" />
            
            
            <label htmlFor="">Already Registered</label>
            <br/>
            <br/>
            <br/>
            <Button variant="secondary" className="px-5" onClick={signInWithGoogle}><i className="fab fa-google"></i>  Google sign-in</Button>
            
            </form>
            </div>
            
            
        </div>
    );
};

export default Login;