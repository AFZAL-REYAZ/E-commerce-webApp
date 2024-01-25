import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {  
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
        localStorage.setItem("email",userData.email)
        localStorage.setItem("password",userData.password)
        // localStorage.setItem("accessToken",true)
        navigate('/login');
    }

  return (
    <div className='border border-0 d-flex justify-content-center'>
    <div className='border border-1 m-5 p-sm-5 w-sm-50 rounded-end d-flex flex-column'>
    <h1 className="m-4">Signup to your account</h1>
    <div className="signupbox">
        <p className="m-1">Already have an account ? </p>
        <button type="button" className="btn btn-light m-3">
            <Link className="nav-link active link-warning" aria-current="page" to="/login">Login here</Link>
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
    <button type="button" className="btn btn-light mt-3 w-100 bg-warning" onClick={sendData}>
        Sign Up
    </button>
    </div>
    </div>
  )
}
export default SignUp