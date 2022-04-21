const htpp = require("http");

const port = 3000;

const rotas = {
  "/": "Curso de NodeJs",
  "/livros": "Entrei na pag de livros",
  "/autores": "Listagem de autores",
};

const server = htpp.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end(rotas[req.url]);
});

server.listen(port, () => {
  console.log(`Servidor escutando em http://localhost:${port}`);
});
