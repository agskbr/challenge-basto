const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGO_CNN);
    console.log("Success connection with DB");
  } catch (error) {
    console.log(error);
  }
};

module.exports = dbConnection;
