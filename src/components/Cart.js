import React,{useState} from 'react';
import { useEffect } from 'react';

import Yourorders from './Youroders';
import "../styles/cart.css";
const Cart = ({cart, setCart, handleChange}) => {
    const [price, setPrice] = useState(0);
    const [orders,setOrders]=useState(false)
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
    <div>

    <h1>Your Orders</h1>
    {  !orders&&<article style={{
        width:"70%"
    }}>
 
        {
            cart?.map((item)=>(
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                 
                        <img src={item.img} />
                        <p>{item.title}</p>
                    </div>
                    <div>
                        <button onClick={()=>handleChange(item, +1)}> + </button>
                        <button>{item.amount}</button>
                        <button onClick={()=>handleChange(item, -1)}> - </button>
                    </div>
                    <div>
                        <span>{item.price}</span>
                        <button onClick={()=>handleRemove(item.id)} >Remove</button>
                    </div>
                </div>
            ))}
        <div className='total'>
            <span className='totalcart'>Total Orders</span>
            <button onClick={()=>setOrders(true)} className='paynow'> Pay Now <br/>Rs {price}</button>
        </div>
    </article> }
    { orders&&<Yourorders cart={cart} setCart={setCart} handleChange={handleChange}/> }
    </div>
  )
}

export default Cart