const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());



// routes
app.use("/api/products", productRoute);




app.get("/", (req, res) => {
  res.send("Hello from Node API Server Updated");
});


mongoose.connect("mongodb+srv://sachithra:6e%21ryc8%23WHF%24Sb6@crudapi.xie9j.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CrudAPI")
  .then(() => {
    console.log('Connected to Database!')
    app.listen(3000,()=>{
        console.log('Server is running on port 3000')
    })
  })
  .catch((error)=>{
    console.log(error);
    console.log('Connection Failed!')
  });