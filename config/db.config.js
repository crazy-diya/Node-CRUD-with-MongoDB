const mongoose = require("mongoose");

const mongoConnect = async (url) => {
  try {
    const conn = await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(
      `URL or MongoDB Configuration Error while connecting....! : ${error}`
    );
    process.exit(1);
  }
};

module.exports = mongoConnect;
