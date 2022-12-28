import React,{useState} from 'react';
import { useEffect } from 'react';


import "../styles/yourorders.css";
const Yourorders = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);

    const handlePrice = ()=>{
        let ans = 0;
        cart.map((item)=>(
            ans += item.amount * item.price
        ))
        setPrice(ans);
    }

    const handleRemove = (id) =>{
        const arr = cart.filter((item)=>item.id !== id);
        setCart(arr);
        // handlePrice();
    }

    useEffect(()=>{
        handlePrice();
    })

  return (
    <React.Fragment>
<div style={{
    Zindex:"-10"
}} className={0 ?"darkover":null}></div>    
        <article style={{
       
    }}>

            {
                cart?.map((item)=>(
                    <div className="cart_box" key={item.id}>
                        <div className="cart_img">
                    
                            <img src={item.img} />
                            <p>{item.title}</p>
                        </div>
                
                        <div>
                            <span>{item.price}</span>
                            
                        </div>
                    </div>
                ))}
            <div className='total'>
                <span className='totalcart'>Total Amount to be paid</span>
            
                
    <div class="svg-wrapper">
      <svg height="40" width="150" xmlns="http://www.w3.org/2000/svg">
        <rect id="shape" height="40" width="150" />
        <div id="text">
        <span style={{
          color:"#000"  
        }} >Rs {price}</span>
        </div>
      </svg>
    </div>
            </div>
        </article>
        

    </React.Fragment>
  )
}

export default Yourorders