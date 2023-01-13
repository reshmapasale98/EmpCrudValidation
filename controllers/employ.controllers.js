const { validationResult } = require('express-validator');

const connection=require('../connection/mysql.connection');

module.exports={
    getAllEmployee:(req,res)=>{
        connection.query("SELECT * FROM employee",(err,result)=>{
            if(!err){
                res.send(result);
            }else{
                res.send(err);
            }
        })
    },
   
    createEmploy:(req,res)=>{
        const errors=validationResult(req);
        if(!errors.isEmpty()){
            res.send({errors:errors.array()});
        }else{
        const {name,designation,password,email,mobile}=req.body; 
       connection.query(`INSERT INTO employee(id, name, designation,password,email,mobile) VALUES (0,'${name}','${designation}','${password}','${email}','${mobile}')`,(err,result)=>{
            if(!err){
                res.send("New employ created ");
            }else{
                res.send(err);
                
            }
        })
    }
    },
    updateEmploy:(req,res)=>{
    
        let id=req.params.id;
        let name=req.body.name;

        connection.query(`UPDATE employee SET name='${name}' WHERE id=${id}`,(err,result)=>{
            if(!err){
                res.send('Update Employ');
            }else{
                res.send(err);
                
            }
        })
    },
    deleteEmploy:(req,res)=>{
        let id=req.params.id;

        connection.query(`DELETE FROM employee WHERE id=${id}`,(err,result)=>{
            if(!err){
                res.send('Employ removed');
            }else{
                res.send(err);
                
            }
        })
    }
}