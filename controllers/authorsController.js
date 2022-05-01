import authors from "../models/Author.js";

class AuthorController {
  static getAuthors = (req, res) => {
    authors.find((err, authors) => {
      res.status(200).json(authors);
    });
  };

  static getAuthorById = (req, res) => {
    const id = req.params.id;

    authors.findById(id, (err, authors) => {
      if (!err) {
        res.status(200).send(authors);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Id não encontrado.` });
      }
    });
  };

  static addAuthor = (req, res) => {
    const author = new authors(req.body);

    author.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar.` });
      } else {
        res.status(201).send(author.toJSON());
      }
    });
  };

  static updateAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteAuthor = (req, res) => {
    const id = req.params.id;

    authors.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default AuthorController;
