import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Welcome from "./Welcome";
import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';
import BestBooks from "./BestBooks";
import { withAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import UpdateBook from "./UpdateBook";

let SERVER = process.env.REACT_APP_SERVER;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      booksData: [],
      selectedBook: null,
      formState: false,
      showForm: false,
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

  handleUpdate = (bookToUpdate) => {
    this.setState({ selectedBook: bookToUpdate });
    this.setState({ showForm: true });
  };

  onUpdate = async (bookToUpdate) => {
      const config = {
        method: "put",
        baseURL: SERVER,
        url: `/books/${bookToUpdate._id}`,
        data: bookToUpdate,
      };

      try {
        const response = await axios(config);
        const updatedBook = response.data;
        console.log('response.data', response.data);

        const booksData = this.state.booksData.map((bookToUpdate) =>
        bookToUpdate._id === updatedBook._id ? updatedBook : bookToUpdate
        );
        this.setState({ booksData, showForm: false });
        console.log(booksData)
      } catch (error) {
        console.log(error);
      }
  };
  
    
  handleHideForm = () => {
    this.setState({
      selectedBook: null,
      showForm: false })
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
                    booksData={this.state.booksData}
                    handleUpdate={this.handleUpdate}
                    showForm={this.state.showForm}
                    handleGet={this.handleGet} 
                    handleDelete={this.handleDelete} 
                    
                    />
                  <UpdateBook
                    selectedBook={this.state.selectedBook}
                    showForm={this.state.showForm} 
                    handleHideForm={this.handleHideForm}
                    onUpdate={this.onUpdate}
                  /> 
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
