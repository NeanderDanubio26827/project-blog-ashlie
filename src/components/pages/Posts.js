import React, { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fazer a solicitação GET à sua API
        const response = await fetch("http://localhost:4000/selectPost/", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados da API");
        }

        const data = await response.json();
        setPosts(data); // Atualizar o estado com os dados da API
        setLoading(false); // Indicar que o carregamento foi concluído
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
        setLoading(false); // Indicar que o carregamento foi concluído (mesmo em caso de erro)
      }
    };

    fetchData();
  }, []); // Remova `posts` do array de dependências

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          {[
            "Primary",
            "Secondary",
            "Success",
            "Danger",
            "Warning",
            "Info",
            "Light",
            "Dark",
          ].map((variant) => (
            <Card
              bg={variant.toLowerCase()}
              key={variant}
              text={variant.toLowerCase() === "light" ? "dark" : "white"}
              style={{ width: "18rem" }}
              className="mb-2"
            >
              <Card.Header>Posts</Card.Header>
              <Card.Body>
                <Card.Title>{post.title} </Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Posts;
