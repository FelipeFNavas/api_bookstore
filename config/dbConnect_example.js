import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://<username>:<password>@bookstore.5aop2.mongodb.net/<database>?"
);

const db = mongoose.connection;

export default db;
