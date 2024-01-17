const mysql = require("mysql");
let mysqlConnection = mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
    password:"saurabh456",
    database:"ecommerce",
    port:3306
});

mysqlConnection.connect((err)=>{
    if(!err){
        console.log("Database connection established");
    }
    else{
        console.log("error in db connection");
    }
});

module.exports=mysqlConnection;