import React, {useState} from "react";
import '../styles/login.css';
import Newnav from '../components/Newnav';
const Login = ({setUserAuth,setAdmin,setLogflag,signup,setSignup}) => {
    const loginClick = (e)=>
    {
      e.preventDefault();
      setUserAuth(true)
      setLogflag(false)
    }
    const adminClick= (e)=> {
      e.preventDefault();
      setUserAuth(true)
      setAdmin(true)
      setLogflag(false)
    }
  
    return (
      <div>
     
    <div class="login-form">  
        <form>
      <h1>Login</h1>
      <div class="content">
      <div class="input-field">
          <input type="text" placeholder="Name" autocomplete="nope"/>
        </div>

        { signup &&<div class="input-field">
          <input type="email" placeholder="Email" autocomplete="nope"/>
        </div>}
        <div class="input-field">
          <input type="password" placeholder="Password" autocomplete="new-password"/>
        </div>
        <a href="#" class="link">Forgot Your Password?</a>
      </div>
      <div class="action">
      { signup &&<button style={{
        backgroundColor:"#000",
        color:"#fff"
      }} onClick={loginClick}>SignUp User</button>}
       {!signup&&<button onClick={loginClick}>Login User</button>}
        {!signup &&<button onClick={adminClick}>Login Admin</button>}
      </div>
      
    </form>
    </div>
    </div>
      )
    
}

export default Login
