//dummy express app

const express = require("express");
const mongoose = require("mongoose");
const { MONGO_USER, MONGO_PASSWORD, MONGO_PORT, MONGO_IP } = require("./config/config");

const app = express();
const mongoURL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_IP}:${MONGO_PORT}/?authSource=admin`;

mongoose
.connect(mongoURL)
.then(() => console.log("successfully connected to DB"))
.catch((e) => console.log(e));



app.get("/", (req, res) => {
    res.send("<h2>Hey Folks!!</h2>");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`listening on port ${port}`));
