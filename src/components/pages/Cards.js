import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.png";
import ashpaint from "../img/ashliepaint.png";
import anime from "../img/anime.png";
import Button from "react-bootstrap/Button";
import "./Card.modules.css";

function Cards() {
  // Defina um array de objetos com informações das imagens e cards
  const cardsData = [
    {
      imgSrc: avatar,
      title: "Na Escola",
      text: "Minha rotina na escola",
    },
    {
      imgSrc: ashpaint,
      title: "Na Piscina",
      text: "Minha rotina na piscina",
    },
    {
      imgSrc: anime,
      title: "Em família",
      text: "minha rotina em família",
    },
    // Adicione mais objetos de card conforme necessário
  ];

  return (
    <div>
      <Row xs={1} md={2} lg={3} className="g-4">
        {cardsData.map((card, idx) => (
          <Col key={idx}>
            <Card className="card-ash d-flex justify-content-center align-items-center">
              <Card.Img
                variant="top"
                src={card.imgSrc}
                width="150px"
                height="150px"
              />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
              <Button variant="outline-warning" size="sm">
                Veja
              </Button>{" "}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Cards;
