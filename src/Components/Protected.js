import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const Protected = (props) => {
  const {Component,clicksearch,searchdatasvar,setAddtocart2} = props
  var navigate = useNavigate();
  useEffect(() => {
    let login = localStorage.getItem("accessToken");
    if(login===false || null){
      navigate('/login');
    }
  })
  return (
   <Component clicksearch={clicksearch} searchdatasvar={searchdatasvar} setAddtocart2={setAddtocart2}  />
  )
}

export default Protected