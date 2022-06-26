const StudentModel = require("../models/student.model");

// get all Student list
exports.getStudentDataList = async (req, res) => {
  try {
    await StudentModel.find()
      .then((result) => {
        res.status(200).json({
          success: true,
          code: 200,
          message: "Success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          code: 400,
          message: "Faild",
          error: error,
        });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// get single student data by Id
exports.getSingleStudentData = async (req, res) => {
  try {
    await StudentModel.findById(req.params.id)
      .then((result) => {
        res.status(200).json({
          success: true,
          code: 200,
          message: "Success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          code: 400,
          message: "Faild",
          error: error,
        });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Create New Student
exports.postStudentData = async (req, res) => {
  const student = new StudentModel({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    collage: req.body.collage,
    email: req.body.email,
  });
  try {
    await student
      .save()
      .then((result) => {
        res.status(200).json({
          success: true,
          code: 200,
          message: "Success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          code: 400,
          message: "Faild",
          error: error,
        });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// Update Student data
exports.updateStudentData = async (req, res) => {
  const student = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    age: req.body.age,
    collage: req.body.collage,
    email: req.body.email,
  };
  try {
    await StudentModel
      .findByIdAndUpdate({ _id: req.params.id }, student)
      .then((result) => {
        res.status(200).json({
          success: true,
          code: 200,
          message: "Success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          code: 400,
          message: "Faild",
          error: error,
        });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};

// delete Student
exports.deleteStudent = async (req, res) => {
  try {
    await StudentModel.findByIdAndDelete(req.params.id)
      .then((result) => {
        res.status(200).json({
          success: true,
          code: 200,
          message: "Success",
          data: result,
        });
      })
      .catch((error) => {
        res.status(400).json({
          success: false,
          code: 400,
          message: "Faild",
          error: error,
        });
      });
  } catch (err) {
    res.status(400).send(err);
  }
};
