import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Card } from "react-bootstrap";
import "./Card.modules.css";
import "./About.modules.css";

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
    e.preventDefault();
  
    // Criar um novo objeto com os dados do formulário
    const newPost = {
      title: formData.title,
      text: formData.text,
    };
  
    try {
      // Enviar os dados para a sua API usando o método POST
      const response = await fetch("https://myapi-blog.vercel.app/insertPost/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPost),
      });
  
      if (response.status >= 200 && response.status < 300) {
        // Código de status de sucesso (2xx)
        alert("Dados enviados com sucesso para a API.");
        // Limpar o formulário ou fazer qualquer outra ação necessária
        setFormData({
          title: "",
          text: "",
        });
      } else {
        // Código de status de erro
        alert("Erro ao enviar dados para a API. Código de status: " + response.status);
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

          <Button variant="outline-success" type="submit" onClick={handleSubmit}>
            Enviar
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default PostForm;
