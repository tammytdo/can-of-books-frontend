import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./App.css";
import Profile from "./Profile";
import BestBooks from "./BestBooks";
import Login from "./Login";
// import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuth0 } from "@auth0/auth0-react";
import Welcome from "./Welcome";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      selectedBook: null,
      showModal: false,
      // auth: this.props.auth0.isAuthenticated,
    };
  }

  handleGet = async () => {
    // console.log("auth0 props in handleGet", this.props.auth0.user);
    let url = `${SERVER}/books`;

    try {
      let response = await axios.get(url);
      this.setState({ booksData: response.data });
      console.log("state", this.state);
    } catch (error) {
      console.log("An error ocurred", error);
    }
  };

  onDelete = async (bookToDelete) => {
    console.log("bookToDelete", bookToDelete);

    let url = `${SERVER}/books/${bookToDelete._id}`;
    let response = await axios.delete(url);
    console.log("response", response);
    const booksDataAfterDeleted = this.state.booksData.filter(
      (eachBook) => eachBook._id !== bookToDelete._id
    );
    console.log("booksDataAfterDeleted", booksDataAfterDeleted);

    this.setState({ booksData: booksDataAfterDeleted });
  };

  render() {
    return (
      <>
        <Router>
          <Header/>
          <Routes>
          <Route
              exact path="/"
              element=
              {this.props.auth0.isAuthenticated ? 
            <>
              <Profile />
              <BestBooks
                handleGet={this.handleGet}
                booksData={this.state.booksData}
                onDelete={this.onDelete}
              />
            </>
            :
            <Welcome />
          }
          />
          </Routes>
          <Footer />
        </Router>
      </>
    );
  }
}

export default withAuth0(App);
