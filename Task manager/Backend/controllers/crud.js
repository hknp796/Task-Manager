const CrudSchema = require("../models/crud");
const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;


const getAllData = async (req, res) => {
  try {
    const crud = await CrudSchema.find({});
    res.status(200).json({ crud });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

const createData = async (req, res) => {
  try {
    const crud = await CrudSchema.create(req.body);
    res.status(200).json({ crud });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const getOneItem = async (req, res) => {
  try {
    const id = req.params.id;
    const crud = await CrudSchema.findOne({ _id: ObjectId(id) });
    if (!crud) {
      return res.status(404).json( { message:"Item Does not exist"} );
    }
    res.status(200).json({ crud });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const updateAllData = async (req, res) => {
  try {
    const id = req.params.id;
    const crud = await CrudSchema.findByIdAndUpdate(
      { _id: ObjectId(id) },
      req.body,
      {
        new: true,
        runValidators: true,
      }
    );
    if (!crud) {
      res.status(404).json({ message: "No Items That id" });
    }
    res.status(200).json({ crud });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
const deleteData = async (req, res) => {
  try {
    const id = req.params.id;
    const crud = await CrudSchema.findByIdAndDelete({ _id: ObjectId(id) });
    if (!crud) {
      res.status(404).json({ message: "No Items in that id" });
    }
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

module.exports = {
  getAllData,
  createData,
  getOneItem,
  updateAllData,
  deleteData,
};
