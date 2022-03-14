const pkg = require("mongoose");
const { connect } = pkg;
require("dotenv").config()


module.exports.startConnection = async function startConnection() {
  const db = await
    connect(process.env.MONGO_URI)
      .then(() => {
        console.log("mongooseConect");
      })
      .catch((err) => { console.log(err); });
}
