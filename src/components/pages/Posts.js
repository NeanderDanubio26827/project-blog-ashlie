import React from "react";

const posts = [
  {
    "id": 1,
    "title": "Meu Primeiro Post",
    "content": "Este é o conteúdo do meu primeiro post. Espero que gostem!"
  },
  {
    "id": 2,
    "title": "Receita de Bolo de Chocolate",
    "content": "Aqui está a receita do melhor bolo de chocolate que já fiz. Espero que vocês aproveitem!\n\nIngredientes:\n- 2 xícaras de farinha de trigo\n- 1 xícara de açúcar\n- 1/2 xícara de cacau em pó\n- 1 colher de chá de fermento em pó\n- 1/2 colher de chá de bicarbonato de sódio\n- 1/2 colher de chá de sal\n- 1 xícara de leite\n- 1/2 xícara de óleo vegetal\n- 2 ovos\n- 2 colheres de chá de extrato de baunilha\n\nModo de Preparo:\n1. Pré-aqueça o forno a 180°C.\n2. Em uma tigela grande, misture a farinha, o açúcar, o cacau em pó, o fermento, o bicarbonato de sódio e o sal.\n3. Em outra tigela, misture o leite, o óleo, os ovos e a baunilha.\n4. Despeje os ingredientes líquidos na mistura de ingredientes secos e mexa até ficar bem combinado.\n5. Despeje a massa em uma forma untada e leve ao forno por 30-35 minutos, ou até que um palito inserido no centro saia limpo.\n6. Deixe esfriar antes de servir.",
    "date": "2023-09-15",
    "author": "João da Silva"
  }
];

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>Data: {post.date}</p>
          <p>Autor: {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Posts;
