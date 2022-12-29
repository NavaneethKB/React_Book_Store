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
    
        <article style={{
           zIindex: "10",
    display: "block"
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
            <div style={{

            }} className='total'>
                <span className='totalcart'>Total Amount to be paid</span>
            
                
                <button class="button-64" role="button"><span style={{color:"white"}} class="text">Rs {price}</span></button>
            </div>
        </article>
        

    </React.Fragment>
  )
}

export default Yourorders