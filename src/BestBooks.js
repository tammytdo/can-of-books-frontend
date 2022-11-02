import React from "react";
import axios from "axios";
import Carousel from 'react-bootstrap/Carousel';
import bookImg from './book.jpeg'


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

    try {
      let results = await axios.get(url);
      this.setState({
        books: results.data,
      });
    } catch (error) {
      console.log("Error ocurred: ", error.response.data);
    }
  };

  componentDidMount() {
    this.getBooks();
  }

  render() {

    return (
      <>
        <h2>My Book Shelf</h2>
        
          {this.state.books.length > 0 ? 
          (
            <div>
              <Carousel id="carousel" variant="dark">
              {this.state.books.map((eachBook) => (
                  <Carousel.Item>
                    <div key={eachBook._id}>
                      <img id="carousel-image"
                        src={bookImg}
                        alt={eachBook.title}
                        height= "700px"
                        width="550px"
                      />
                      <Carousel.Caption id="carousel-text-box">
                        <p className="carousel-text">{eachBook.status}</p>
                        <h3 className="carousel-text">{eachBook.title}</h3>
                        <p className="carousel-text">{eachBook.description}</p>
                      </Carousel.Caption>
                    </div>
                  </Carousel.Item>
              ))}
              </Carousel>
            </div>
          ) 
          : 
          <p>ErrorAlert</p>
          }
      </>
    );
  }
}

export default BestBooks;
