import React from "react";
import bookImg from "./book.jpeg";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";

class BestBooks extends React.Component {
  componentDidMount = () => {
    try {
      this.props.handleGet();
    } catch (error) {
      console.error("Error from componentDidMount: ", error);
    }
  };

  render() {
    return (
      <>
        <h1>My Bookshelf</h1>
        {this.props.booksData.length > 0 ? (
          <>
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
                      <h3 className="carousel-text">{eachBook.title}</h3>
                      <p className="carousel-text">{eachBook.description}</p>
                      <p className="carousel-text">{eachBook.status}</p>
                      
                      <Button
                        type="submit"
                        onClick={() => this.props.handleUpdate(eachBook)}
                      >
                        UPDATE
                      </Button>
                      <Button
                        type="submit"
                        onClick={() => this.props.handleDelete(eachBook)}
                      >
                        DELETE
                      </Button>

                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            )}
          </>
        ) : (
          <p>ErrorAlert</p>
        )}
      </>
    );
  }
}

export default BestBooks;
