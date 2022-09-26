const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3600;
const formRoutes = require('./routes/form-routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());
app.use(cors());
app.use('/form', formRoutes)
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/formdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected to DB...!");
  })
  .catch((err) => console.error('Error connecting to DB: ', err)); 

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
