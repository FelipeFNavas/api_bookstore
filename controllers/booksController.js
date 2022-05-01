import books from "../models/Book.js";

class BookController {
  static getBooks = (req, res) => {
    books.find((err, books) => {
      res.status(200).json(books);
    });
  };

  static getBookById = (req, res) => {
    const id = req.params.id;

    books.findById(id, (err, books) => {
      if (!err) {
        res.status(200).send(books);
      } else {
        res
          .status(400)
          .send({ message: `${err.message} - Id não encontrado.` });
      }
    });
  };

  static addBook = (req, res) => {
    const book = new books(req.body);

    book.save((err) => {
      if (err) {
        res
          .status(500)
          .send({ message: `${err.message} - falha ao cadastrar.` });
      } else {
        res.status(201).send(book.toJSON());
      }
    });
  };

  static updateBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndUpdate(id, { $set: req.body }, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro atualizado com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;

    books.findByIdAndDelete(id, (err) => {
      if (!err) {
        res.status(200).send({ message: "Livro removido com sucesso!" });
      } else {
        res.status(500).send({ message: err.message });
      }
    });
  };
}

export default BookController;
