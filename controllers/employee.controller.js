const EmployeeModel = require("../models/employee.model");

// get all employee data list
exports.getEmployeeListData = async (req, res) => {
  try {
    await EmployeeModel.find()
      .then((result) => {
        console.log(result);
        res.send(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// get employee by ID
exports.getEmployeeDetailsByID = async (req, res) => {
  try {
    await EmployeeModel.findById(req.params.id)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Create New Employee
exports.createNewEmployee = async (req, res) => {
  const employee = new EmployeeModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    salary: req.body.salary,
  });

  try {
    const saveEmployee = await employee.save();
    res.send(saveEmployee);
  } catch (err) {
    res.status(400).send(err);
  }
};

// update employee
exports.updateEmployee = async (req, res) => {
  try {
    const employee = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      phone: req.body.phone,
      salary: req.body.salary,
    };
    await EmployeeModel.findByIdAndUpdate({ _id: req.params.id }, employee)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete employee
exports.deleteEmployee = async (req, res) => {
  try {
    await EmployeeModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        console.log(result);
        res.json(result);
      })
      .catch((error) => {
        res.status(400).send(error);
      });
  } catch (err) {
    res.status(400).send(err);
  }
};