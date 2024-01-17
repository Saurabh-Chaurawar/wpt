const express = require("express");
let connection = require("../db/dbConnect");
let myRouter = express.Router();

myRouter.get("/departments",function(req,resp){
    connection.query("select * from dept",function(err,data,fields){
        if(err){
            resp.status(404).send("Data not found");
        }
        else{
            resp.render("display",{deptdata:data});
        }
    });
});

myRouter.get("/addDepartment",function(req,resp){
    resp.render("addDept");
});

myRouter.post("/addNew",function(req,resp){
    connection.query("insert into dept values(?,?,?)",[req.body.deptno,req.body.dname,req.body.loc],function(err,result,field){
        if(err){
            resp.status(500).send("Data could not be added");
        }
        else{
            resp.redirect("/departments");
        }
    });
});

myRouter.get("/deleteDept/:deptno",function(req,resp){
    connection.query("delete from dept where DEPTNO=?",[req.params.deptno],function(err,result){
        if(err){
            resp.status(500).send("Data could not be deleted");
        }
        else{
            resp.redirect("/departments");
        }
    });
});

myRouter.get("/editDept/:deptno",function(req,resp){
    connection.query("select * from dept where DEPTNO=?",[req.params.deptno],function(err,data,fields){
        if(err){
            resp.status(404).send("Data not Found");
        }
        else{
            resp.render("editDept",{deptdata:data});
        }
    });
});

myRouter.post("/editDept/update",function(req,resp){
    connection.query("update dept set DNAME=?,LOC=? where DEPTNO=?",[req.body.dname,req.body.loc,req.body.deptno],function(err,result){
        if(err){
            resp.status(500).send("Update Failed");
        }
        else{
            resp.redirect("/departments");
        }
    });
});


module.exports=myRouter;