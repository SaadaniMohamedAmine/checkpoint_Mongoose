
const express=require('express') ; 
const route=express.Router() ;
const Person=require('../models/personPrototype') ; 


//route to add new person to the database 
route.post('/',(req,res)=>{
    const newPerson=new Person(req.body) ;
    newPerson.save((err,data)=>{
         if(err) {
             console.log(err)
         }
         else {
             res.send("New contact added to database !")
         }
    })
}) ;



module.exports=route ;