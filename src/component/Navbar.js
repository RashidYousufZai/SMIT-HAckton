import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';

function NavScrollExample() {
  
  const navigate = useNavigate();
  const NaviagteSignin = () =>{
    navigate("/");
  }


  return (
    <Navbar style={{ margin: "10px", borderRadius:"20px", 	filter: "drop-shadow(0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5))"
  }} class="shadow p-2 mb-2 bg-white rounded" bg="white" expand="lg" sticky='top' >
      <Container>
        <Navbar.Brand style={{color: "green"}} href="/dashboard">SAYLANI WELFARE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/dashboard">Home</Nav.Link>
            <Nav.Link href="/account">ACCOUT</Nav.Link>
            <Nav.Link href="/Cart">CART</Nav.Link>
          </Nav>
          <Nav.Link className="d-flex">

            <Button  variant="outline-success" onClick={NaviagteSignin}>Login</Button>
            <Button className='ms-3'   variant="outline-success" onClick={NaviagteSignin}>SignIn</Button>
          </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default NavScrollExample;