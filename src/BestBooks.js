import React from "react";
import BookFormModal from "./BookFormModal";
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
    console.log('this.props.formState', this.props.formState)

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
                        onClick={() => this.props.handleDelete(eachBook)}
                      >
                        DELETE
                      </Button>
                    </Carousel.Caption>
                  </div>
                </Carousel.Item>
              ))}
            </Carousel>
            {this.props.formState === true && (
              <BookFormModal
                show={this.props.formState}
              />
            )
            }
          </div>
        ) : (
          <p>ErrorAlert</p>
        )}
      </>
    );
  }
}

export default BestBooks;
