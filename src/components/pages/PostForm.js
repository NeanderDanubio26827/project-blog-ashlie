import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "./Card.modules.css";
import "./About.modules.css";

function PostForm() {
  return (
    <div className="mylittlepony2 d-flex justify-content-center align-items-center">
      <Card className="card-ash" style={{ width: "600px", height: "400px", backgroundColor: "#eb83ff" }}>
        <Card.Body>
          <Form.Group controlId="postTitle" className="mb-3">
            <Form.Label style={{ width: "500px" }}>Título do Post</Form.Label>
            <Form.Control type="text" placeholder="Digite o título do post" />
          </Form.Group>

          <Form.Group controlId="postText" className="mb-3">
            <Form.Label style={{ width: "500px" }}>Texto do Post</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Digite o texto do post"
            />
          </Form.Group>

          <Button variant="outline-success" type="submit">
            Enviar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostForm;
