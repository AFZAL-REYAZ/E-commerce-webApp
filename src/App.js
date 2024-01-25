import "./App.css";
import Navbar from "./Components/Navbar";
import { useState } from "react";
import AddToCart from "./Components/AddToCart";
import Home from "./Components/Home";
import {
  BrowserRouter ,
  Routes, Route,
} from "react-router-dom";
import SineUp from "./Components/SignUp";
import Login from "./Components/Login";
import Protected from "./Components/Protected";
import FilteredData from "./Components/FilteredData";

function App() {
  const [searchdatas, setSearchdatas] = useState("");
  const [clicksearch, setClicksearch] = useState("");
  const [cartcount,setCartcount]=useState(0);
 
  return (
   <BrowserRouter>
   <Navbar setSearchdatas2={setSearchdatas} setClicksearch2={setClicksearch}/>
   <Routes>
   <Route path="/" element={<Protected Component={Home} searchdatasvar={searchdatas} clicksearch={clicksearch}/>} />
   <Route path="/addtocart" element={<Protected Component={AddToCart} setCartCount={setCartcount}/>} />
   <Route path="/signUp" element={<SineUp/>} />
   <Route path="/login" element={<Login/>} />
   <Route path="/all-data" element={<FilteredData/>} />
   </Routes>
   </BrowserRouter>
  );
}

export default App;
