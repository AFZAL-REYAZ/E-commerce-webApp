import React, { useEffect, useState } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar = ({ setSearchdatas2, setClicksearch2 }) => {
  const [Value, setValue] = useState("")
  const location = useLocation().pathname
  const opt = ["t-shirt", "shoes", "jeans", "phone"];
  let navigate = useNavigate()
  const handleChange = (e) => {
    setSearchdatas2(e.target.value)
  }
  const dropsearch = (e) => {
    setClicksearch2(e.target.value)
  }
  const sendData = () => {
    navigate("/addtocart")
  }

  useEffect(() => {
    setValue(localStorage.getItem("accessToken") === 'true' ? "LOGOUT" : "LOGIN")
    if (localStorage.getItem("accessToken") === null) {
      setValue("LOGIN")
    }
  }, [Value, location])

  useEffect(() => {
    if (localStorage.getItem("accessToken") === null || false) {
      setValue("LOGIN")
      navigate('/signUp')
    }
  },[undefined]);


  const handleclick = () => {
    if (Value === 'LOGOUT') {
      localStorage.setItem("accessToken", false)
      setValue("LOGIN")
      navigate('/login')
    }
  }

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark fixed-top">
        <div className="container-fluid">
          <h2 className="text-warning">Amazon</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" onClick={() => { handleclick() }}>{Value}</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle text-primary" href="/items" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Items
                </a>
                <select className="dropdown-menu" onChange={dropsearch}>
                  {opt.map((value, id) => <option key={id}>{value}</option>)}
                </select>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleChange} />
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
            <ShoppingCartIcon className="addtocarticon bg-warning" onClick={() => { sendData() }} style={{ marginLeft: "30px", marginRight: "20px" }} />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;