const express = require("express");
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config()
const { startConnection } = require("../server/mongoConfig/conecction")
const PORT = process.env.PORT ;

const post=require("../server/routes/postRouter")

const cors = require("cors");
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
startConnection();
app.use("/post/",post)
app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});