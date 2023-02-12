import React from 'react'
import Card from 'react-bootstrap/Card';
import catogery1 from "../assets/catogery1.jpeg"
import img1 from "../assets/1.jpg"
import img2 from "../assets/2.jpg"
import img3 from "../assets/3.jpeg"
import "./dashboard.css"

const DashboardCatogery = () => {
    return (
        <>
            <h2 style={{ textAlign: "center", margin : "35px 0", color:"green"}}>SHOP BY CATAGORY</h2>
            <div className='catogery'>

                <Card style={{ width: '18rem', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img variant="top" src={catogery1} />
                    <Card.Body>
                        <Card.Title>Vegatable</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img variant="top" src={img1} />
                    <Card.Body>
                        <Card.Title>Fruits</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img variant="top" src={img2} />
                    <Card.Body>
                        <Card.Title>Fish</Card.Title>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img variant="top" src={img3} />
                    <Card.Body>
                        <Card.Title>Fries with Burger</Card.Title>
                    </Card.Body>
                </Card>
            </div></>

    )
}

export default DashboardCatogery