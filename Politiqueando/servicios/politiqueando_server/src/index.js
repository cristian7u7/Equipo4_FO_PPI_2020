require("./config/index");
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// rutas
const route = require("./network/routes");
route(app);

app.get("/",(req, res)=>{
    res.send("Politiqueando server");
})

app.listen(3306,()=>{
    console.log("Politiqueando server http://localhost:3306");
})
