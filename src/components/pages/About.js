import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.png";
import ashpaint from "../img/ashliepaint.png";
import anime from "../img/anime.png";
import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './About.modules.css'
//import ExampleCarouselImage from 'components/ExampleCarouselImage';

function About() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="mylittlepony2 d-flex justify-content-center align-items-center">
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item className="carousel">
        <img  className="img-about" src={anime} alt=""/>
        <Carousel.Caption>
          <h3>Eu sou a Ashlinha</h3>
          <p>Tudo bem?</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img className="img-about" src={ashpaint} alt="" />
        <Carousel.Caption>
          <h3>Eu busco alegria</h3>
          <p>Amo me divertir</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carousel">
        <img className="img-about" src={avatar} alt=""/>
        <Carousel.Caption>
          <h3>Olha meu avatar</h3>
          <p>
            Espero que gostem! bjos!
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default About;
