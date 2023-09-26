import React from "react";
import anime from "../img/anime.png";
import "./Home.modules.css";
function Home() {
  return (
    <>
      <div className="mylittlepony">
      <img className="anime"
          src={anime}
          alt="Descrição da imagem"
          
        />
      </div>
    </>
  );
}

export default Home;
