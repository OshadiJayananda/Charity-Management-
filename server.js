const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
require("dotenv").config();

const PORT = process.env.PORT || 3003;

const URL = process.env.MONGODB_URI;

app.use(cors());
app.use(bodyParser.json()); // Use body-parser middleware to parse JSON bodies
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect(URL);  

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");

})

app.listen(PORT, () => {
    console.log('Server is up and running on portnumber: '+ PORT)
})


const router = require("./routes/vRouter");
app.use("/api", router);

const eventsRouter = require("./routes/events.js");
app.use("/event",eventsRouter);

const confirmRouter = require("./routes/confirm.js");
app.use("/confirm",confirmRouter);

