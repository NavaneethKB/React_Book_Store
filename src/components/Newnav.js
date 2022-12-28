import React, { useState } from 'react';
import '../styles/newnav.css';
import logout from "../logout.png"
const Newnav = ({size, setShow,setUserAuth,admin,popup,setPopUp,userAuth,setLogflag,setSignup,signup}) => {
    const hanleLogout=()=>{
        window.location.reload();
        return
    }
const handleSignUp=()=>{
    setLogflag(true)
   setSignup(true)


}
    return(
    <header className='navbar'>
        <div  className='navbar__title navbar__item'>
        <span  onClick={()=>setShow(true)}>
             The Book Store
            </span>
     
        </div>
     {  admin&&  
     <i
        style={{
            fontSize:"27px",
            marginRight:"7px"
        }}
     
        onClick={
            ()=>setPopUp(true)}
         class="fa fa-plus-square" aria-hidden="true"></i>
         }
       { !userAuth &&<div onClick={()=>setLogflag(true)} className=' nav_button'>Log In</div>}
       { !userAuth&& <button onClick={handleSignUp} className=' nav_button'   >Sign Up</button>}
       
        <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
           {userAuth&& < img src={logout} width="55" height="55" 
            onClick={hanleLogout}
            style={{padding:"5px"}}/>}
    </header>
)
        };

export default Newnav