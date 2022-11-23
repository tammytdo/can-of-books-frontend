// LAB 12 - FEATURED TASKS
// Create a `BookFormModal` component that contains the form elements required to collect the user input needed for creating a new book. Reveal this modal when the "Add Book" button is clicked, and hide the modal when the modal is closed.
// When the form is submitted, use Axios to send a `POST` request to the server's `/books` endpoint, including the data from the form. The server should respond with the new book that was successfully saved, which you should pass up to the `BestBooks` component, save to state, to allow React to re-render the list of all books.

// LAB 13 - FEATURED TASKS
// Add a form in the front end to let the user edit an existing book's details. When the form is submitted, send the new data to the server, and update the page according to the response.

import React from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";

class BookFormModal extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.checked,
    };
    this.props.onCreate(bookInfo);
    this.setState({ showModal: false });
  };

  render() {
    return (
      <>
        {this.props.show === true && (
          <>
            <h3>What book do you want to add to the bookshelf?</h3>
            
            <Form>
              <Form.Group className="mb-3" controlId="addBook">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="title" placeholder="book title" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="addBook">
                <Form.Label>Book Description</Form.Label>
                <Form.Control
                  type="description"
                  placeholder="book description"
                />
              </Form.Group>


              <Form.Group className="mb-3" controlId="addBook">
                <Form.Label>Book Status</Form.Label>
                <Form.Select>
                  <option>Recommended To Me</option>
                  <option>Fav 5</option>
                  <option>Lifechanging</option>
                </Form.Select>
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </>
        )}
      </>
    );
  }
}

export default BookFormModal;
