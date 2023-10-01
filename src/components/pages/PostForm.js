import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "./Card.modules.css";
import "./About.modules.css";
import Home from "./Home";
import { Link } from "react-router-dom";

function PostForm() {
  const [formData, setFormData] = useState({
    title: "",
    text: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    // Tornar a função assíncrona
    e.preventDefault();

    const newPost = {
      title: formData.title,
      text: formData.text,
    };

    try {
      const response = await fetch(
        "https://myapi-blog.vercel.app/insertPost/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPost),
        }
      );

      if (response.ok) {
        alert("Dados enviados com sucesso para a API.");
        setFormData({
          title: "",
          text: "",
        });
      } else {
        alert("Erro ao enviar dados para a API.");
      }
    } catch (error) {
      console.error("Erro ao enviar a solicitação POST:", error);
    }
  };

  return (
    <div className="mylittlepony2 d-flex justify-content-center align-items-center">
      <Card
        className="card-ash"
        style={{ width: "600px", height: "400px", backgroundColor: "#eb83ff" }}
      >
        <Card.Body>
          <Form.Group controlId="postTitle" className="mb-3">
            <Form.Label style={{ width: "500px" }}>Título do Post</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite o título do post"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Form.Group controlId="postText" className="mb-3">
            <Form.Label style={{ width: "500px" }}>Texto do Post</Form.Label>
            <Form.Control
              as="textarea"
              rows={4}
              placeholder="Digite o texto do post"
              name="text"
              value={formData.text}
              onChange={handleInputChange}
            />
          </Form.Group>

          <Button
            variant="outline-success"
            type="submit"
            onClick={handleSubmit}
          >
            <Link to="/PostForm" className="nav-link" element={<Home />}>
              Enviar
            </Link>
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostForm;
