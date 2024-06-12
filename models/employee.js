const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  isCurrentlyEmployed: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model("Employees", EmployeeSchema);
