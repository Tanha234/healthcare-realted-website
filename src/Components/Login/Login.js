import React, { useEffect } from 'react';
import useAuth from '../../hooks/useAuth';


const Login = () => {
    const{signInWithGoogle}=useAuth()
 
    return (
        <div>
            <h2>Login</h2>
            <input type="email" name="" placeholder="Enter your email" id="" />
            <input type="password" name="" placeholder="Enter your password" id="" />
            <button type="submit"></button>
            <p>New to the website</p>
            <button onClick={signInWithGoogle}>Login</button>
            
        </div>
    );
};

export default Login;