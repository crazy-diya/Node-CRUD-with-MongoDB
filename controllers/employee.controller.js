const EmployeeModel = require("../models/employee.model");

// get all employee data list
exports.getEmplyeeListData = (req, res) => {
  EmployeeModel.getAllEmployeesData((err, employee) => {
    if (err) {
      res.send(err);
    } else {
      console.log(employee);
      res.json(employee);
    }
  });
};
// get employee by ID
exports.getEmployeeDetailsByID = (req, res) => {
  // res.send(req.params)
  EmployeeModel.getSingleEmployeeData(req.params.id, (err, employee) => {
    if (err) {
      res.status(401).send(err);
    } else {
      console.log("Single employee data", employee);
      res.status(200).json(employee);
    }
  });
};
// Create New Employee
exports.createNewEmployee = (req, res) => {
  const employeeReqData = new EmployeeModel(req.body);
  console.log("Parse the all Post data through req.body", req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log("empty data insertion!");
    res.status(400).send({ success: false, message: "Please fill all Fields" });
  } else {
    console.log("Valied data !");
    EmployeeModel.createNewEmployee(employeeReqData, (err, employee) => {
      if (err) {
        console.log("error!");
        res.send(err);
      } else {
        console.log("good");
        res
          .status(201)
          .json({
            status: true,
            code: 201,
            message: "Employee created successfully",
            data: employee,
          });
      }
    });
  }
};
// update employee
exports.updateEmployee = (req,res)=>{
  const employeeReqData = new EmployeeModel(req.body)
  if(req.body.constructor === Object && Object.keys(req.body).length === 0 ){
    console.log("empty data insertion!");
    res.status(400).send({ success: false, message: "Please fill all Fields" });
  }else{
    EmployeeModel.updateExistingEmployee(req.params.id,employeeReqData,(err,employee)=>{
      if (err) {
        res.send(err)
      }else{
        res.json({
          status: true,
          code: 201,
          message: "Employee Updated successfully",
          data: employee,})
      }
    })
  }

}
// delete employee
exports.deleteEmployee = (req,res)=>{
  EmployeeModel.deleteEmployee(req.params.id,(err,employee)=>{
    if(err){
      res.send(err);
    }else{
      res.json({
        status: true,
        code: 201,
        message: "Employee Deleted successfully",
        data: employee,})
    }
  })
}