import React from "react";
import Form from "react-bootstrap/Form";

function PostForm() {
  return (
    <>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Upload de imagem</Form.Label>
        <Form.Control type="file" />
      </Form.Group>

      <Form.Group controlId="postTitle" className="mb-3">
        <Form.Label>Título do Post</Form.Label>
        <Form.Control type="text" placeholder="Digite o título do post" />
      </Form.Group>

      <Form.Group controlId="postText" className="mb-3">
        <Form.Label>Texto do Post</Form.Label>
        <Form.Control as="textarea" rows={4} placeholder="Digite o texto do post" />
      </Form.Group>
    </>
  );
}

export default PostForm;
