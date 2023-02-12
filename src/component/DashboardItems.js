import React, { useState } from 'react';
import catogery1 from "../assets/catogery1.jpeg";
import "./dashboard.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { uid } from "uid";
import { set, ref} from "firebase/database";
import {db } from "../firebase"
import {auth } from "../firebase";
import img4 from "../assets/5.jpeg"
import img5 from "../assets/image.jpg"
import img6 from "../assets/images1.jpg"

 
const DashboardItems = () => {
    
    const [ add, setadd ]  = useState("");
    const [img , setimg ] =  useState();
    const writeToDatabase = () => {


        const uidd = uid();
        set(ref(db, `/${auth.currentUser.uid}/${uidd}`), {
          uidd: uidd,
        });
    
        // setTodo("");
      };
    return (
        <>
            <h1 style={{ fontSize: '40px', textAlign: "center", margin : "35px 0", color:"green"}}>Shop Now</h1>
        
            <div style={{ display:'flex' }}>

                <Card style={{ width: '33%', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"}}>
                    <Card.Img style={{ width: '20rem' }} variant="top" src={img4} />
                    <Card.Body>
                        <Card.Title>Chicken Roast</Card.Title>
                        <Card.Text>
                            400
                        </Card.Text>
                        <Button variant="primary" onClick={writeToDatabase}>Add to Cart</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '33%', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img style={{ width: '20rem' }} variant="top" src={img5} />
                    <Card.Body>
                        <Card.Title>Chips</Card.Title>
                        <Card.Text>
                            250
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>

                <Card style={{ width: '33%', filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))" }}>
                    <Card.Img style={{ width: '20rem' }} variant="top" src={img6} />
                    <Card.Body>
                        <Card.Title>Finger Chips</Card.Title>
                        <Card.Text>
                            100
                        </Card.Text>
                        <Button variant="primary">Add to Cart</Button>
                    </Card.Body>
                </Card>

            </div>
        </>

    )
}

export default DashboardItems