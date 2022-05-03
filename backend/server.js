const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql');
const mysqlConnection = require('./database/connection');


app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(cors());

app.get('/' ,(req ,res)=>{

    mysqlConnection.query("SELECT * FROM customers " ,(err ,rows ,field)=>{
        if(!err){

           // console.log(parsedData);
            res.json(rows);
        }else{
            res.send(err)
        }
    })
})

app.post("/execute" ,(req ,res)=>{

    try {
        const {query} = req.body;
        mysqlConnection.query(query ,(err ,rows ,field)=>{
            if(!err){
    
               // console.log(parsedData);
                res.status(200).json(rows);
            }else{
        res.status(402).send("error.message"); 
                
                
            }
        })
        
    } catch (error) {
        res.status(402).send("error.message"); 
    }

})
app.listen(4000);