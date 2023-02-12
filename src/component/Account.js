import React from 'react'
import logo from "../assets/logo.png";
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';




const Account = () => {
  const navigate = useNavigate();
  const logout = () =>{
    navigate("/");
  }

  return (
    <div style={{ display:'block' }}>
      <h1 style={{textAlign : "center"}}>Setting</h1>
      <div style={{ display:"flex", justifyContent:"center" }}>
        <img  src={logo}/>
      </div>
      <div style={{ display:"flex", justifyContent:"center", marginRight:"10px" }}>
        <input type="text" placeholder='update full name'  style={{alignSelf: 'center'}}/>
        <Button variant="primary" size="sm" onClick={logout}>update</Button>
      </div>
      
      <h3  style={{textAlign:"center", padding:"10px 0"}}>Orders</h3>
      
      <div style={{ display:"flex", justifyContent:"center" }}>
      <Button variant="primary" size="lg" onClick={logout}>
          Logout
        </Button>
      </div>

      
    </div>
  )
}

export default Account