import React from 'react';
import '../styles/cards.css'

const Cards = ({item, handleClick,shopdata,setShopdata,admin}) => {
  const handleRemove=(id)=>{
    const arr = shopdata.filter((item)=>item.id !== id);
    setShopdata(arr)
      }
  
    const {
      title, author, price, img} = item;

  return (
   
    <div className="cards" >
   { admin&& <i onClick={()=>{handleRemove(item.id)}} className="fa fa-window-close closebtn" aria-hidden="true">
    
    </i>}
        <div className="image_box">
            <img src={img} alt="Image" />
        </div>
        <div className="details">
            <p>{title}</p>
            <p>{author}</p>
            <p>Price - {price}Rs</p>
            <button onClick={()=>handleClick(item)} >Add to Cart</button>
        </div>
    </div>
  )
}

export default Cards