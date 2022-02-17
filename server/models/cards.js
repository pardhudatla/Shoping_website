const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const cards = new Schema({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  rating: {
    rate: {
      type: Number,
    },
    count: {
      type: Number,
    },
  },
  clicked: {
    type: Boolean,
    default: false,
  },
});

const Cards = mongoose.model("Cards", cards);
module.exports = Cards;
