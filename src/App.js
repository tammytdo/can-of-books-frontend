import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Welcome from "./Welcome";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import BookFormModal from "./BookFormModal";
import BestBooks from "./BestBooks";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BookFormModal from "./BookFormModal";

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      selectedBook: null,
      formState: false,
    };
  }
  
  handleGet = async () => {
    // console.log("auth0 props in handleGet", this.props.auth0);

    let url = `${SERVER}/books`;

    try {
      let response = await axios.get(url);
      this.setState({ booksData: response.data });
    } catch (error) {
      console.log("An error ocurred", error);
    }
  };
    
  handleDelete = async (bookToDelete) => {
    console.log("bookToDelete", bookToDelete);

    let url = `${SERVER}/books/${bookToDelete._id}`;
    await axios.delete(url);
    const booksDataAfterDeleted = this.state.booksData.filter(
      (eachBook) => eachBook._id !== bookToDelete._id
    );
    this.setState({ booksData: booksDataAfterDeleted });
  };

  // handleAdd = async (bookToAdd) => {

  // }

  handleShowForm = () => {
    this.setState({ formState: true })
  }

  handleHideForm = () => {
    this.setState({ formState: false })
  }

  render() {
    return (
      <>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                // this.props.auth0.isAuthenticated ? (
                <>
                  <Header />
                  <Profile />
                  <BestBooks
                    handleGet={this.handleGet} 
                    handleDelete={this.handleDelete} 
                    booksData={this.state.booksData}
                    formState={this.state.formState}
                    // handleShowForm={this.state.handleShowForm} 
                    // handleHideForm={this.state.handleHideForm} 
                  />
                  <Button
                    onClick = {this.handleShowForm}
                  >
                    Add A Book
                  </Button>
                </>
                // ) : (
                //   <>
                //     <Welcome />
                //     <Login />
                //   </>
                // )
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
