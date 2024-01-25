import React, { useEffect, useState } from 'react'
import './AddToCart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../features/CartSlice';

const AddToCart = ({setCartCount}) => {
    const dispatch=useDispatch();
    const {cart}=useSelector((state)=>state.allCart);
     const [amount,setTotalAmount] =useState(0)
     const[count,setCount] =useState(0)

    useEffect(()=>{
      let totalCount=0;
        let sum=0;
        cart.forEach((ele)=>{
        sum=sum+parseInt(ele.price)
        totalCount++;
       })
       setTotalAmount(sum)
       setCount(totalCount)
      //  setCartCount(totalCount);
    },[cart]);
    const pamentmethod=()=>{
      alert("Sorry Pament Method is Not Added")
    }
  return (
    <>
    <div className='addtocart'>
           {cart === ""?<div className='CartEmpty'>
            <h3>No Item in your Cart</h3>
            <h4>Add your Favourite</h4>
           </div>:
            cart.map((val,id)=>{
                return ( 
                <div className='tablecart' key={id}>
                    <img src={val.image} alt="loding"/>
                    {val.name} {val.price}
                    <button type="button" className="btn btn-warning" onClick={pamentmethod}>BUY NOW</button>
                    <div className="addToCartActiveBtn">
                      <button className='deleteCartItem' onClick={()=>dispatch(removeItem(val.id))}>delete</button>                      
                    </div>
                </div>
                )
            })
           }
    </div>
           <div className='totalCountBox'>
            <div style={{display:"flex",flexDirection:"column",margin:"20px",alignItems:"center"}}><h3>Total Number of your Item</h3>{count}</div>
            <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center", margin:"20px"}}>
              <h3>Total Cost of your Item</h3>
              <div>{amount}</div>
              <button className='btn btn-warning' onClick={pamentmethod}>Buy All</button>
            </div>
           </div>

    </>
  )
}

export default AddToCart