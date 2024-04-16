const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strict", false);
    mongoose.connect(
      "mongodb+srv://onegromayinzi:I5gcJYBjvcBdCahu@cluster0.focxxeu.mongodb.net/app-js-fullstack"
    );
    console.log("The data base has been connected successfuly");
  } catch (err) {
    console.log(err);
    process.exit();
  }
};

module.exports = connectDB;
