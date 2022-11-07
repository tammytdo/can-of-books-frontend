import React from 'react';
import "./App.css";
import Header from './Header';
import Footer from './Footer';
import BestBooks from './BestBooks';
import Profile from './Profile'
import { withAuth0 } from '@auth0/auth0-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Welcome from './Welcome';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


class App extends React.Component {
  render() {
    return (
      <>
        {/* <Router > */}
          <Header />
          <Routes>
            {/* {this.props.auth0.isAuthenticated ? */}
              <Route exact path="/" element={<BestBooks />} /> 
              {/* : */}
              <Route exact path="/" element={<Welcome />} />
              {/* } */}
            <Route exact path="/profile" element={<Profile />} />
          </ Routes>
          <Footer />
        {/* </ Router> */}
      </>
    )
  }
}

export default withAuth0(App);
