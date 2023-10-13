const express = require('express');
const logger = require("morgan");
const cors = require("cors")

const cookieParser = require('cookie-parser')
require('dotenv').config();


const indexRouter= require("./routes/index")


const {connect} = require('./db/db')

const app = express();

app.use(logger("dev"))
app.use(express.json())
app.use(cors())
app.use(cookieParser());


app.use("/", indexRouter)


connect();

module.exports = app