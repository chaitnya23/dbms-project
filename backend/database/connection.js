const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"chaitnya23@mySQL",
    database:"vehicle_insurance",
    multipleStatements:true
});

mysqlConnection.connect((err)=>{
 
    if(!err){
        console.log("connected to database");
    }else{
        console.log("connection failed " ,err);
    }
}) 

module.exports = mysqlConnection;