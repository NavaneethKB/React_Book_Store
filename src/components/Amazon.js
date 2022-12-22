import React, { useState } from 'react';
import list from '../data';
import '../styles/amazon.css';
import { useEffect } from 'react';
import Cards from './Cards';
import Addbook from './Addbook';
import "../styles/index.css";
const Amazon = ({handleClick,popup,setPopUp}) => {
 
  const[shopdata,setShopdata]=useState(list)

  useEffect(()=>{
    alert("hai")
   },[shopdata])
 const newValue={
    id: null,
    title: null,
    author: null,
    price: null,
    img: null,
  amount:1
  }
const handleSubmit=(e)=>{
  e.preventDefault()
  
newValue.id=0


setShopdata([...shopdata,newValue])


setPopUp(false)
}
const finaldata = [...shopdata].sort((a, b) => a.id - b.id);
  return (
    <section 
 
    >
   
        {
          
            finaldata.map((item)=>(
                <Cards item={item} key={item.id} handleClick={handleClick} />
            ))
            
        }
       
     
        {
           popup
          &&
          <div class="form-container">
        <i onClick={()=>setPopUp(false)} className="fa fa-window-close closebtn" aria-hidden="true"></i>
      <form  title="Add new Book"  class="register-form">
      
   <h1>Add  a new Book</h1>
        <input
          id="first-name"
          class="form-field"
          type="text"
          placeholder="Book Name"
          name="bookname"
          onChange={e=>{
            newValue.title=e.target.value
          }}
        />
 
        <input
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Author or publiser"
          name="author"
          value={newValue.name}
          onChange={e=>{
            newValue.author=e.target.value
          }}
        />

        <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Price in (Rs.)"
          name="price"
          onChange={e=>{
            newValue.price=e.target.value
          }}
        />
    <input
          id="email"
          class="form-field"
          type="text"
          placeholder="Image Url"
          name="imageurl"
          onChange={e=>{
            newValue.img=e.target.value
          }}
        />
        <button onClick={handleSubmit} class="form-field" >
          Add new book
        </button>
      </form>
    </div>
  
    
    }
    </section>
    
  )
}

export default Amazon