import { Routes,Route } from "react-router-dom";
import React from 'react'
import Home from "./Home"
import Login from "./Login";
import SignUp from "./SignUp";
import Pricing from "./Pricing"
function AllRoutes() {
  return (
   <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/login" element={<Login/>} />
    <Route path="/signup" element={<SignUp/>} />
    <Route path="/pricing" element={<Pricing/>} />
   </Routes>
  )
}

export default AllRoutes