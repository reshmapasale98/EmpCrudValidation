const mysql=require('mysql');

const connection=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'employdb'
});

connection.connect(err=>{
    err?console.log(err.message):console.log("connected with DB");
})

module.exports=connection;
