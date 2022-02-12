import { Link, useNavigate } from "react-router-dom"
import {Navbar  , Nav } from 'react-bootstrap'
import myStore from "../../store/store"


export default () => {
  return <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand >
        <Link to='/' class="brand-logo">Shoe Store</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link ><Link to="/signup">Signup</Link></Nav.Link>
            <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
            <Nav.Link ><Link to="/launch">Launch</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  </div>
}