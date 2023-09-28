import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import avatar from "../img/avatar.png";
import ashpaint from "../img/ashliepaint.png";
import anime from "../img/anime.png";

function About() {
  return (
    <>
      <img src={anime} alt="" width="200px" height="200px"></img>
      <p>Sobre mim, Ashlie Beatriz</p>
    </>
  );
}

export default About;
