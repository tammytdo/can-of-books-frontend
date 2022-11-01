import React from "react";
import axios from "axios";

// let SERVER = process.env.REACT_APP_SERVER;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      errorMessage: "",
    };
  }

  getBooks = async () => {
    let url = `${process.env.REACT_APP_SERVER}/books`;
    console.log('url: ', url)

    try {
      let results = await axios.get(url);
      console.log('axios results: ', results.data);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("Error ocurred: ", error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
    console.log('books after componentDidMount: ', this.state.books);
    console.log("books", this.state.books);
  }

  //WHY AM I NOT RENDERING BOOK DATA?

  // Backend: http://localhost:3001/books

  render() {
    console.log("state of books", this.state);

    return (
      <>
        <h2>My Book Shelf</h2>

        <div>
          {this.state.books.length > 0 ? (
            <div>
              {this.state.books.map((eachBook, idx) => (
                // console.log(eachBook);
                <div key={idx}>
                  <p>{eachBook.title}</p>
                  <p>{eachBook.description}</p>
                  <p>{eachBook.status}</p>
                </div>
              ))};
            </div>
          ) : (
            <p>no books found</p>
          )}
        </div>
      </>
    );
  }
}

export default BestBooks;
