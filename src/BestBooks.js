import React from "react";
import axios from "axios";

let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorMessage: "",
    };
  }
  getBooks = async() => {
    try {
     let results = await axios.get(`${SERVER}/books`);
     console.log(results.data)
     this.setState = {
      books: results.data,
     }
    } catch (error) {
      console.log('Error ocurred: ', error.response.data)
    }
  }

  componentDidMount(){
    this.getBooks();
  }

  //WHY AM I NOT GETTING BOOK DATA WHEN I GO TO THE BOOKS ROUTE?
  // Backend: http://localhost:3001/books
  // Frontend: http://localhost:3000/books
  render() {
    // this.getBooks();
    let allBooks = this.state.books.map((book) => (
      <p key={book._id}>
        {book.title} {book.description} {book.status}
      </p>
    ));

    return (
      <>
        <h2>My Book Shelf</h2>

        {this.state.books.length ?
         <>{allBooks}</>
        :
        <p>no books found</p>
        }
      </>
    );
  }
}

export default BestBooks;

// getBooks = async () => {
//   try {
//     const config = {
//       method: "get",
//       baseUrl: process.env.REACT_APP_SERVER,
//       url: "/books",
//     };

//     const results = await axios.get(config);
//     this.setState({
//       books: results.data,
//     });
//   } catch (error) {
//     console.log("componentDidMount error occurred", error);
//     this.setState({
//       errorMessage: `Status code: ${error.response.status}: ${error.response.data}`,
//     });
//   }
// };

// componentDidMount(){
//   this.getBooks();
// }
