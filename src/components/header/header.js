import { Link, useNavigate } from "react-router-dom"
import { Navbar, Nav } from 'react-bootstrap'
import myStore from "../../store/store"
import { useSelector } from "react-redux"

export default () => {

  let navigate = useNavigate();

  let user = useSelector((store) => {
    return store.UserSection.currentUser;
  })
  return <div>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand >
        <Link to='/' class="brand-logo">Shoe Store</Link>
      </Navbar.Brand>

      {user.name ?
        <span className="user-name">
          <img className="thumb-profile" src={user.pic} />

          Welcome <b>{user.name.toUpperCase()}</b>
        </span>
        : null
      }

      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          {
            user.name ? null :
              <Nav.Link ><Link to="/signup">Signup</Link></Nav.Link>
          }

          {
            user.name ? null :
              <Nav.Link ><Link to="/login">Login</Link></Nav.Link>
          }
          {
            user.name ? 
              <Nav.Link ><Link to="/dashboard">Dashboard</Link></Nav.Link> : null
          }
          
          <Nav.Link ><Link to="/launch">Launch</Link></Nav.Link>
          <Nav.Link ><Link to="/create-ad">Create Ad</Link></Nav.Link>

          {!user.name ? null :
            <Nav.Link><Link to="" onClick={() => {

              myStore.dispatch({
                type: "LOGOUT_HOGYA"
              })

              navigate('/login');

            }}>Signout</Link></Nav.Link>
          }

          {
            user.name ? <Nav.Link><Link to="/cart">Cart</Link></Nav.Link> : null
          }
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
}