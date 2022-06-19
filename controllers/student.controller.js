const Student = require("../models/student.model");
const StudentModel = require("../models/student.model");

exports.getStudentDataList = (req, res) => {
  StudentModel.getAllStudentData((err, student) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        success: true,
        code: 200,
        message: "Success",
        data: student,
      });
    }
  });
};

exports.getSingleStudentData = (req, res) => {
  StudentModel.getSingleStudentData(req.params.id, (err, student) => {
    if (err) {
      res.send(err);
    } else {
      res.status(200).json({
        success: true,
        code: 200,
        data: student,
      });
    }
  });
};

exports.postStudentData = (req, res) => {
  const studentData = new Student(req.body);
  if (req.body.constructor === Object && Object.keys(req.body).length === 0) {
    console.log("empty data insertion!");
    res.status(400).send({ success: false, message: "Please fill all Fields" });
  } else {
    StudentModel.postStudentData(studentData, (err, student) => {
      if (err) {
        console.log("error!");
        res.send(err);
      } else {
        console.log("good");
        res.status(201).json({
          status: true,
          code: 201,
          message: "Student created successfully",
          data: student,
        });
      }
    });
  }
};

exports.updateStudentData = (req,res)=>{
  // const updateStudentDatas = new Student(req.body);
  console.log(req.body["collage"]);
  if(req.body.constructor === Object && Object.keys(req.body).length === 0){
    res.status(401).json({
      success:false,
      message:"please fill the field"
    })
  }else{
    Student.updateStudent(req.params.id,req.body["collage"],(err,student)=>{
      if(err){
        res.send(err)
      }else{
        res.send(student)
      }
    })
  }
}