import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import "./App.css";

class Footer extends React.Component {
  render() {
    return (
      <Navbar className="footer" collapseonselect="true" expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Bookshelf 2022</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
