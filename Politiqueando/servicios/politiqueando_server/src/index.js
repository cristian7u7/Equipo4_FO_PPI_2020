require("./config/index");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const routes = require("./network/routes")

app.use(bodyParser.json({limit: "10mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

// rutas


app.use( "/", routes )

app.listen(3000,()=>{

    console.log("Politiqueando server http://localhost:3000");

})
