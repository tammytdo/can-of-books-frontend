import React from "react";
// import axios from "axios";
import bookImg from "./book.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import { useAuth0 } from "@auth0/auth0-react";

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // books: [],
      errorMessage: "",
    };
  }

  componentDidMount() {
    this.props.handleGet();
  }

  render() {
    return (
      <>
      <h1>My Bookshelf</h1>
        {this.props.booksData.length > 0 ? (
          <div>
            <Carousel id="carousel" variant="dark">
              {this.props.booksData.map((eachBook, idx) => (
                <Carousel.Item key={`book-id-${idx}`}>
                  <div>
                    <img
                      id="carousel-image"
                      src={bookImg}
                      alt={eachBook.title}
                      height="700px"
                      width="550px"
                    />
                    <Carousel.Caption id="carousel-text-box">
                      <p className="carousel-text">{eachBook.status}</p>
                      <h3 className="carousel-text">{eachBook.title}</h3>
                      <p className="carousel-text">{eachBook.description}</p>
                      <Button
                        type="submit"
                        onClick={() => this.props.onDelete(eachBook)}
                      >
                        DELETE
                      </Button>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
        ) : (
          <p>ErrorAlert</p>
        )}
      </>
    );
  }
}

export default BestBooks;
