import React from 'react'
import Navbar from "./Navbar"
import Grocerry from "../assets/Grocery.png"
import "./dashboard.css";
import DashboardCatogery from './DashboardCatogery';
import DashboardItems from './DashboardItems';
import Admin from "./Admin" 
import Navbarp from './Navbarp'
import Footer from "./Footer"



const Dashboard = () => {
  return (
    <div>
      {/* <Admin/> */}
      <Navbarp />
      <div className='div-img'><img src={Grocerry} className="image" /></div>
      
      <DashboardCatogery/>
      <DashboardItems/>
      <Footer/>

    </div>
  )
}

export default Dashboard