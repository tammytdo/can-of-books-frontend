import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Login from './Login';
import Logout from './Logout';
import { withAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";

class Header extends React.Component {
  render() {
    return (
      <Nav collapseonselect="true" expand="lg" bg="dark" variant="dark">
        <Nav.Item><Nav.Link href="/" className="nav-link"><Button>Home</Button></Nav.Link></Nav.Item>
        {this.props.auth0.isAuthenticated ? <Logout /> : <Login/>}
      </Nav>
    )
  }
}

export default withAuth0(Header);
