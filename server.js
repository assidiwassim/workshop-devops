const express = require('express')
var mongoose = require("mongoose");
const app = express()
const port = 3000

mongoose
  .connect("mongodb://mongodb:27017/db", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB is connected "))
  .catch((err) => console.log(err));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(` Node app listening on port ${port}`)
})