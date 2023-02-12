import React, { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  createUserWithEmailAndPassword
} from "firebase/auth";
import { auth } from "../firebase.js";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./welcome.css"

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [registerInformation, setRegisterInformation] = useState({
    email: "",
    confirmEmail: "",
    password: "",
    confirmPassword: ""
  });

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        navigate("/homepage");
      }
    });
  }, []);

  const GotoHomePage = () => {
    navigate("/dashboard");
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  const handleRegister = () => {
    if (registerInformation.email !== registerInformation.confirmEmail) {
      alert("Please confirm that email are the same");
      return;
    } else if (
      registerInformation.password !== registerInformation.confirmPassword
    ) {
      alert("Please confirm that password are the same");
      return;
    }
    createUserWithEmailAndPassword(
      auth,
      registerInformation.email,
      registerInformation.password
    )
      .then(() => {
        navigate("/homepage");
      })
      .catch((err) => alert(err.message));
  };

  return (


    <div className="welcome">

      <Container >
        <div>
          <Row>
            <Col style={{textAlign:"center"}}><h1>SAYLANI WELFARE STORE</h1></Col>
            
          </Row>
          <Row><Col style={{textAlign:"center"}}><h3>ONLINE DISCOUNT STORE</h3></Col></Row>
         
        </div>

        <div className="login-flex">
          {isRegistering ? (
            <div>
              <Row className="inside-flex">
                <Col><input
                  type="email"
                  placeholder="Email"
                  value={registerInformation.email}
                  onChange={(e) =>
                    setRegisterInformation({
                      ...registerInformation,
                      email: e.target.value
                    })
                  }
                /></Col>
              </Row>
              <Row><Col><input
                type="email"
                placeholder="Confirm Email"
                value={registerInformation.confirmEmail}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmEmail: e.target.value
                  })
                }
              /></Col></Row>
              <Row><Col><input
                type="password"
                placeholder="Password"
                value={registerInformation.password}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    password: e.target.value
                  })
                }
              /></Col></Row>
              <Row><Col><input
                type="password"
                placeholder="Confirm Password"
                value={registerInformation.confirmPassword}
                onChange={(e) =>
                  setRegisterInformation({
                    ...registerInformation,
                    confirmPassword: e.target.value
                  })
                }
              /></Col></Row>

              <button className="sign-in-register-button" onClick={handleRegister}>SignUP</button>
              <button className="create-account-button" onClick={() => setIsRegistering(false)}>Already have an Account</button>
            </div>
          ) : (
            <div>
              <Row><Col><input type="email" placeholder="Email" onChange={handleEmailChange} value={email} /></Col></Row>
              <Row><Col><input
                type="password"
                onChange={handlePasswordChange}
                value={password}
                placeholder="Password"
              /></Col></Row>
              <Row><Col>  <button className="sign-in-register-button" onClick={handleSignIn}>
                Sign In
              </button></Col></Row>
              <Row><Col><button
                className="create-account-button"
                onClick={() => setIsRegistering(true)}
              >
                Don’t have an account? Register
              </button></Col></Row>
              <Row><Col><button
                className="create-account-button" style={{margin:"40px 0"}}
                onClick={GotoHomePage}>Contenuie without login</button></Col></Row>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}