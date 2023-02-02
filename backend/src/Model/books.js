const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const BooksSchema = new Schema({

  activity: String,
  status: String,
  action: String,
  date: String,
  time: String,
  user : {type : Schema.Types.ObjectId, ref: "User"}
 
});

module.exports = mongoose.model("Books", BooksSchema);