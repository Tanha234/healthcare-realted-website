import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';
import '../Login/login.css'




const Login = () => {
    const{signInWithGoogle,handleEvent,emailVery,passWord,error,toogleSing,isLogging,registerNewUser}=useAuth()
 
    return (
        <div className="col-md-12 login">
            <form onSubmit={handleEvent}>
            <h2>Please{isLogging?'Login':'Register'}</h2>
            <input className="my-3 w-25" onChange={emailVery} type="email" name="" placeholder="Enter your email" id="" required />
            <br/>
            <input className="w-25" onChange={passWord} type="password" name="" placeholder="Enter your password" id="" required />

            <br/>
            <br/>
            
            <button className="px-5" onChange={registerNewUser}>Enter</button>
            <br/>
            <input onChange={toogleSing} type="checkbox" name="" id="" />
            
            
            <label htmlFor="">Already Registered</label>
            <br/>
            <br/>
            <br/>
            <button onClick={signInWithGoogle}>Google sign-in</button>
            </form>
            
            
        </div>
    );
};

export default Login;