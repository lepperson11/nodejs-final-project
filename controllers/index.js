const mongodb = require("../db/connect");
const ObjectId = require("mongodb").ObjectId;

const getAllEmployees = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection("Employees").find();
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getSingleEmployee = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const result = await mongodb
      .getDb()
      .db()
      .collection("Employees")
      .find({ _id: userId });
    result.toArray().then((lists) => {
      res.setHeader("Content-Type", "application/json");
      res.status(200).json(lists[0]);
    });
  } catch (error) {
    res.status(500).json(error);
  }
};

const createEmployee = async (req, res) => {
  try {
    const employee = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      age: req.body.age,
      isCurrentlyEmployed: req.body.isCurrentlyEmployed,
    };

    const response = await mongodb
      .getDb()
      .db()
      .collection("Employees")
      .insertOne(employee);
    if (response.acknowledged) {
      res.status(201).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occured while creating the employee."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const updateEmployee = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const employee = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      department: req.body.department,
      age: req.body.age,
      isCurrentlyEmployed: req.body.isCurrentlyEmployed,
    };
    const response = await mongodb
      .getDb()
      .db()
      .collection("Employees")
      .replaceOne({ _id: userId }, employee);
    if (response.acknowledged) {
      res.status(204).json(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while updating the employee."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const userId = new ObjectId(req.params.id);
    const response = await mongodb
      .getDb()
      .db()
      .collection("Employees")
      .deleteOne({ _id: userId }, true);
    console.log(response);
    if (response.acknowledged) {
      res.status(200).send(response);
    } else {
      res
        .status(500)
        .json(
          response.error || "Some error occurred while deleting the employee."
        );
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllEmployees,
  getSingleEmployee,
  createEmployee,
  updateEmployee,
  deleteEmployee,
};
