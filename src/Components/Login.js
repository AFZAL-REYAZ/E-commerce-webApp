import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate()
    const [userData, setuserData] = useState({
        email:"",
        password:""
    })
    const handleChange=(event)=>{
        setuserData({
            ...userData,
            [event.target.name]:event.target.value
        })
    }

    const sendData=async()=>{
        const realemail = localStorage.getItem("email")
        const realPassword = localStorage.getItem("password")
        if(realemail === userData.email && realPassword === userData.password){
            localStorage.setItem("accessToken",true)
            navigate('/')
        }
        else{
            localStorage.setItem("accessToken",false);
            alert("Password wrong")
        }
    }
  return (
    <div className='border border-0 d-flex justify-content-center'>
    <div className='loginsmallbox border border-1 m-5 p-sm-5 w-sm-50 rounded-end d-flex flex-column'>
    <h1 className="m-4">Login to your account</h1>
    <div className="signupbox">
        <p className="m-4">Don't have account ? </p>
        <button type="button" className="btn btn-light m-3">
            <Link className="nav-link active link-warning" aria-current="page" to="/signUp">Sign up here</Link>
        </button>
    </div>
    <hr />
    <div className="mb-3 column">
        <label htmlFor="staticEmail" className="col-sm-2 col-form-label">Email</label>
        <div className="col-sm-20">
        <input type="email" className="form-control" name='email' placeholder='Enter Your Email' id="staticEmail" onChange={(event)=>handleChange(event)} />
        </div>
    </div>
    <div className="mb-3 column">
        <label htmlFor="inputPassword" className="col-sm-2 col-form-label">Password</label>
        <div className="col-sm-20">
        <input type="password" className="form-control" name='password' placeholder='Enter Your Password' id="inputPassword" onChange={(event)=>handleChange(event)} />
        </div>
    </div>
    <button type="button" className="btn btn-light mt-3 col-sm-20 w-100 bg-warning" onClick={sendData}>
       LOGIN
    </button>
    </div>
    </div>
  )
}
export default Login