const express = require("express");
const router = express.Router();

const EmployeeController = require("../controllers/index");

router.get("/", EmployeeController.getAllEmployees);

router.get("/:id", EmployeeController.getSingleEmployee);

router.post("/", EmployeeController.createEmployee);

router.put("/:id", EmployeeController.updateEmployee);

router.delete("/:id", EmployeeController.deleteEmployee);

module.exports = router;
