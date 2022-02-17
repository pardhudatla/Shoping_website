const express = require("express");
const app = express();
const bodyparser = require("body-parser");
app.use(bodyparser());
const faker = require("faker");

const router = express.Router();

const Carousels = require("../models/carousel");

// const image=faker.image.image();

router.post("/carousel", async (req, res) => {
  try {
    const { image } = req.body;
    const images = await Carousels.create({
      image,
    });
    return res.json({
      status: "success",
      message: "loaded carousel",
      images,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      status: "image not found",
      error: e.message,
    });
  }
});

router.get("/carousel", async (req, res) => {
  try {
    const allcarousels = await Carousels.find();
    return res.json({
      status: "success",
      allcarousels,
    });
  } catch (e) {
    return res.status(500).json({
      status: "failed to fetch the data",
      message: e.message,
    });
  }
});

router.put("/carousel/:id", async (req, res) => {
  try {
    const clicking = await Carousels.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { clicked: true } }
    );
    return res.json({
      status: "success",
      message: "clicked to true",
      clicking,
    });
  } catch (e) {
    res.status(500).json({
      status: "image not found",
      error: e.message,
    });
  }
});

module.exports = router;
