const express = require("express");
const router = express.Router();

const emplyeeController = require("../controllers/employee.controller");

// get all emplyee data
router.get("/", emplyeeController.getEmployeeListData);
// get single emplyee data by ID
router.get("/:id",emplyeeController.getEmployeeDetailsByID)
// create new employee
router.post("/", emplyeeController.createNewEmployee);
// update existing employee
router.put("/:id",emplyeeController.updateEmployee)
// delete existing Employee
router.delete("/:id",emplyeeController.deleteEmployee)

module.exports = router;
