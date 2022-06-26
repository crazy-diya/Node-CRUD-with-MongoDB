const dotenv = require("dotenv");
dotenv.config({ path: "./.env" });
const express = require("express");
const app = express();
const mongoConnection = require("./config/db.config");
const port = process.env.PORT; // setup the server port
const employeeRoutes = require("./routes/employee.route"); // import employee routes
const studentRoute = require("./routes/student.route");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse requrest data content type application/json

// create employee route
app.use("/api/v1/employee", employeeRoutes);
// create student route
app.use("/api/v1/student", studentRoute);
// default root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

mongoConnection(process.env.MONGOOSE_LOCAL_URI)
  .then((result) => {
    // listen to the port
    app.listen(port, () => {
      console.log(`Server is listening at port ${port}`);
    }); 
  })
  .catch((err) => console.log(`DB Connect error : ${err}`));
