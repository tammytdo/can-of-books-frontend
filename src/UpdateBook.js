import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

class UpdateBook extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const bookInfo = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
      _id: this.props.selectedBook._id,
    };
    console.log('updated bookInfo:', bookInfo);

    this.props.onUpdate(bookInfo);
  };
  
  render() {

    if (!this.props.selectedBook) {
      return null;
    }
    return (
      <>
        <Modal show={this.props.showForm} onHide={this.props.handleHideForm}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Book to Update Title</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Title"
                  defaultValue={this.props.selectedBook.title}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  type="name"
                  placeholder="Enter Description"
                  defaultValue={this.props.selectedBook.description}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="status">
                <Form.Label>Book Status</Form.Label>

                <Form.Select defaultValue={this.props.selectedBook.status}>
                  {/* type="text"
                  placeholder="Select status"
                  defaultValue={this.props.selectedBook.status} */}
                  <option value="RECOMMENDED TO ME">RECOMMENDED TO ME</option>
                  <option value="FAVORITE FIVE">FAVORITE FIVE</option>
                  <option value="LIFE-CHANGING">LIFE-CHANGING</option>
                </Form.Select>
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      </>
    );
  }
}

export default UpdateBook;