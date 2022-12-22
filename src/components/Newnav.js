import React, { useState } from 'react';
import '../styles/newnav.css';
const Newnav = ({size, setShow,admin,popup,setPopUp}) => (
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
        <div className=' nav_button'>Log In</div>
        <button className=' nav_button' >Sign Up</button>
          
        <div className="cart" onClick={()=>setShow(false)}>
                <span>
                    <i className="fas fa-cart-plus"></i>
                </span>
                <span>{size}</span>
            </div>
    </header>
);

export default Newnav