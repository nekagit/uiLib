const express = require("express");
const router = express.Router();

const mongoose = require("mongoose");
const prijavaSchema = require("../models/prijava.model.js");
const url =
  "mongodb+srv://njoco:pSVJjBxVVFfRRhwq@soprotterdam.v4bx2oh.mongodb.net/?retryWrites=true&w=majority";
const connection = mongoose.createConnection(url);

const Prijava = connection.model("Prijava", prijavaSchema);

const createPrijava = async (req, res) => {
  try {
    if (!req.body.name) {
      return res.status(400).send({ message: "Name can not be empty!" });
    }
    const prijava = new Prijava({
      name: req.body.name,
      lastName: req.body.lastName,
      phone: req.body.phone,
      email: req.body.email,
      sports: req.body.sports,
    });
    const data = await prijava.save();
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({
        message:
          err.message || "Some error occurred while creating the Prijava.",
      });
  }
};

// Route handler for retrieving all Prijave
const findAllPrijave = async (req, res) => {
  try {
    const data = await Prijava.find();
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({
        message: err.message || "Some error occurred while retrieving prijave.",
      });
  }
};

// Route handler for retrieving a single Prijava by id
const findPrijavaById = async (req, res) => {
  try {
    const data = await Prijava.findById(req.params.id);
    if (!data) {
      return res
        .status(404)
        .send({ message: "Not found Prijava with id " + req.params.id });
    }
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error retrieving Prijava with id=" + req.params.id });
  }
};

// Route handler for updating a Prijava by id
const updatePrijavaById = async (req, res) => {
  try {
    const data = await Prijava.findByIdAndUpdate(req.params.id, req.body, {
      useFindAndModify: false,
    });
    if (!data) {
      return res
        .status(404)
        .send({
          message: `Cannot update Prijava with id=${req.params.id}. Maybe Prijava was not found!`,
        });
    }
    res.send({ message: "Prijava was updated successfully." });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Error updating Prijava with id=" + req.params.id });
  }
};

// Route handler for deleting a Prijava by id
const deletePrijavaById = async (req, res) => {
  try {
    const data = await Prijava.findByIdAndRemove(req.params.id);
    if (!data) {
      return res
        .status(404)
        .send({
          message: `Cannot delete Prijava with id=${req.params.id}. Maybe Prijava was not found!`,
        });
    }
    res.send({ message: "Prijava was deleted successfully!" });
  } catch (err) {
    res
      .status(500)
      .send({ message: "Could not delete Prijava with id=" + req.params.id });
  }
};

// Route handler for deleting all Prijave
const deleteAllPrijave = async (req, res) => {
  try {
    const data = await Prijava.deleteMany({});
    res.send({
      message: `${data.deletedCount} Prijave were deleted successfully!`,
    });
  } catch (err) {
    res
      .status(500)
      .send({
        message:
          err.message || "Some error occurred while removing all prijave.",
      });
  }
};

// Route handler for finding all published Prijave
const findAllPublishedPrijave = async (req, res) => {
  try {
    const data = await Prijava.find({ published: true });
    res.send(data);
  } catch (err) {
    res
      .status(500)
      .send({
        message:
          err.message ||
          "Some error occurred while retrieving published prijave.",
      });
  }
};

// Define the routes
router.post("/", createPrijava);
router.get("/", findAllPrijave);
router.get("/:id", findPrijavaById);
router.put("/:id", updatePrijavaById);
router.delete("/:id", deletePrijavaById);
router.delete("/", deleteAllPrijave);
router.get("/published", findAllPublishedPrijave);

module.exports = router;
