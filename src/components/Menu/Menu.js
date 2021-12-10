import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Menu = () => {

  const { user, logout } = useAuth();
  console.log(user.email);

  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Container>
          <NavLink className="navbar-brand" to="/">
            <img
              src="https://thefrypans.com/wp-content/uploads/2018/10/cropped-logo-50x36.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <NavLink to="home" className="nav-link">Home</NavLink>
              <NavLink to="about" className="nav-link" >About</NavLink>
              <NavLink to="blog" className="nav-link" >Blog</NavLink>
              <NavLink to="service" className="nav-link" >Service</NavLink>
              <NavLink to="contact" className="nav-link" >Contact</NavLink>





              {!user.email &&
                <NavLink to="login" className="nav-link" >Login</NavLink>
              }
              {!user.email &&
                <NavLink to="register" className="nav-link" >Register</NavLink>
              }
              {user.email &&
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              }
              {user.email &&
                <button className="nav-link btn">LogOut</button>
              }

              {user.email &&
                <button className="nav-link btn">{user.email}</button>
              }

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </div>
  );
};

export default Menu;