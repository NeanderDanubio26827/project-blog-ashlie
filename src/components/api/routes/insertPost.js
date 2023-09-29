var express = require("express");
var router = express.Router();
const fs = require("fs");
const path = require("path");

router.post("/", async (req, res) => {
  let dados = req.body;

  console.log(JSON.stringify(dados));
  // Lendo o arquivo "veiculos.json" e tratando como um JSON válido ou um array vazio
  let posts;
  try {
    posts =
      JSON.parse(
        fs.readFileSync(
          path.join(path.resolve(__dirname, "../public"), "posts.json")
        )
      ) || [];
  } catch (error) {
    posts = [];
  }
  // Adicionando os novos dados ao array
  posts.push(dados);

  // Escrevendo os dados no arquivo "veiculos.json"
  fs.writeFile(
    path.join(path.resolve(__dirname, "../public"), "posts.json"),
    JSON.stringify(posts),
    (err) => {
      if (err) {
        console.error(err);
        console.log(dados);
        res.sendStatus(500);
      } else {
        console.log("Data successfully written to posts.json");
        res.sendStatus(200);
      }
    }
  );
});

module.exports = router;
