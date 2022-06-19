var database_connection = require("../config/db.config");

var Student = function (student) {
  this.first_name = student.first_name;
  this.last_name = student.last_name;
  this.age = student.age;
  this.collage = student.collage;
  this.email = student.email;
  this.mahapola = student.mahapola;
  this.is_student = student.is_student;
  this.created_at = new Date();
  this.updated_at = new Date();
};

Student.getAllStudentData = (result) => {
  database_connection.query("select * from student", (err, res) => {
    if (err) {
      console.log("while inserting query err!");
      result(null, err);
    } else {
      console.log("Successfully Retrive Data!");
      result(null, res);
    }
  });
};

Student.getSingleStudentData = (id, result) => {
  database_connection.query(
    "select * from student where id = ?",
    id,
    (err, res) => {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

Student.postStudentData = (student, result) => {
  database_connection.query(
    "insert into student set ?",
    student,
    (err, res) => {
      if (err) {
        console.log("Error while inserting data!");
        result(null, err);
      } 
      else {
        console.log("Employee created successfully!");
        result(null, res);
      }
    }
  );
};

Student.updateStudent= (id,collage,result)=>{
  database_connection.query(
    `update student set collage = '${collage}' where id = '${id}'`,(err,res)=>{
      if(err){
        result(null,err)
      }else{
        result(null,res)
      }
    }
  )
}

module.exports = Student;
