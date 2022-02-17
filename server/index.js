const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
const bodyparser = require("body-parser");
app.use(bodyparser());
require("./database/databaseconnection");

const Carousels = require("./models/carousel");
const Cards = require("./models/cards");

const carouselroutes = require("./routes/carousel");
const cardsroutes = require("./routes/cards");
// app.get('/',(req,res)=>{
//     return res.send("Pardhu Narasimha raju Work");
// })

app.use("/", carouselroutes);
app.use("/", cardsroutes);

app.listen(process.env.PORT, () => {
  console.log(`serve is running at ${process.env.PORT}`);
});
