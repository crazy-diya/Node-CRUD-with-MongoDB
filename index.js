const dotenv = require("dotenv");
dotenv.config({path: "./.env"})
const express = require("express");
const app = express();
const port = process.env.PORT || 5000; // setup the server port
const employeeRoutes = require("./routes/employee.route"); // import employee routes
const studentRoute = require("./routes/student.route");

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // parse requrest data content type application/json

// create employee route
app.use("/api/v1/employee", employeeRoutes);
// create student route
app.use("/api/v1/student",studentRoute)
// default root route
app.get("/", (req, res) => {
  res.send("Hello World!");
});
// listen to the port
app.listen(port, () => {
  console.log(`Server is listening at port ${port}`);
});
