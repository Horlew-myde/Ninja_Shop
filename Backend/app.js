const express = require('express');
const app = express();
const ErrorHandler = require('../Backend/middleware/error');
const cookieParser = require('cookie-parser');

app.use(express.json());
app.use(cookieParser());

//Routes Imports
const product = require("./routes/ProductRoute");
const user = require("./routes/UserRoute.js");
const order = require("./routes/OrderRoute");

app.use("/api/v2",product);
app.use("/api/v2",user);
app.use("/api/v2",order);

//for error handling
app.use(ErrorHandler);


module.exports = app;