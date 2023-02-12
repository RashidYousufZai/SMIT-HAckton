import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';


const First = () => {
  const navigate = useNavigate();


  return (
    <>
    <Container style={{margin:"45px 480px"}}>
      <Row>
        <Col><Image src={logo} /></Col>
      </Row>
      <Row>
        <Col><h1>SAYLANI WELFARE</h1></Col>
      </Row>
      <Row>
        <Col><h3>ONLINE DISCOUNT STORE</h3></Col>
      </Row>
      <Row style={{marginLeft:"102px"}}>
      <a href="#" style={{color:"green"}} >GET STARTED</a>
      </Row>
    </Container>
    </>
  )
}

export default First