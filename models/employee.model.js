var database_connection = require("../config/db.config");

var Employee = function (employee) {
  this.first_name = employee.first_name;
  this.last_name = employee.last_name;
  this.email = employee.email;
  this.phone = employee.phone;
  this.organization = employee.organization;
  this.designation = employee.designation;
  this.salary = employee.salary;
  this.status = employee.status ? employee.status : 1;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Employee.getAllEmployeesData = (result) => {
  database_connection.query(
    "select * from employees" /* "select * from employees where is_deleted = 0" */,
    (err, res) => {
      if (err) {
        console.log("Error while fetching employees!", err);
        result(" ", err);
      } else {
        console.log("Employees fetch successfully!");
        result(res, " ");
      }
    }
  );
};

Employee.getSingleEmployeeData = (id, result) => {
  database_connection.query(
    `Select * from employees where id = ${id}`,
    (err, res) => {
      if (err) {
        console.log("Error while fetching employee data by id", err);
        result(null, err);
      } else {
        console.log("Employees fetch successfully!");
        result(null, res);
      }
    }
  );
};

Employee.createNewEmployee = (employeeReqData, result) => {
  database_connection.query(
    "insert into employees set ?",
    employeeReqData,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data!");
        result(null, err);
      } else {
        console.log("Employee created successfully!");
        result(null, res);
      }
    }
  );
};

Employee.updateExistingEmployee = (id, employeeReqData, result) => {
  database_connection.query(
    // "update employees set ? where id =? ",
    // [
    //   {
    //     first_name: employeeReqData.first_name,
    //     last_name: employeeReqData.last_name,
    //     email: employeeReqData.email,
    //     phone: employeeReqData.phone,
    //     organization: employeeReqData.organization,
    //     designation: employeeReqData.designation,
    //     salary: employeeReqData.salary,
    //   },
    //   id,
    // ],
    "update employees set first_name=?,last_name=?,email=?,phone=?,organization=?,designation=?,salary=?,status=? where id =? ",
    [
      employeeReqData.first_name,
      employeeReqData.last_name,
      employeeReqData.email,
      employeeReqData.phone,
      employeeReqData.organization,
      employeeReqData.designation,
      employeeReqData.salary,
      employeeReqData.status,
      id,
    ],
    (err, res) => {
      if (err) {
        console.log("Error while data inserting fr the update!");
        result(null, err);
      } else {
        console.log("Successfully data Updated!");
        result(null, res);
      }
    }
  );
};

Employee.deleteEmployee = (id, result) => {
  database_connection.query(
    "delete from employees where id=?",
    [id],
    (err, res) => {
      if (err) {
        console.log("Error while Deleting data!");
        result(null, err);
      } else {
        console.log("Employee Delete successfully!");
        result(null, res);
      }
    }
  );
  // database_connection.query(
  //   "update employees set is_deleted = ? where id = ?",
  //   [1, id],
  //   (err, res) => {
  //     if (err) {
  //       console.log("Error while changin is_deleted data!");
  //       result(null, err);
  //     } else {
  //       console.log("Employee Delete changin is_deleted successfully!");
  //       result(null, res);
  //     }
  //   }
  // );
};

module.exports = Employee;
