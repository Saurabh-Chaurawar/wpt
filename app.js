const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const routes = require("./routes/routers");
let app = express()

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");

app.use(bodyparser.urlencoded({extended:false}));
app.use("/",routes);

app.listen(9000,function(){
    console.log("server started at port 9000");
});

module.exports=app;