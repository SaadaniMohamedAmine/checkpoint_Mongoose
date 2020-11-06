
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

//route to add many persons  
route.post('/addMany',(req,res)=>{
    const arrayOfPeople=req.body ;
     Person.create(arrayOfPeople,(err)=>{
         if(err) {
             console.log(err)
         }
         else {
             res.send("List added successfully ")
         }
     })
      
})

//route to find someone with given name 
route.get('/:name',(req,res)=>{
    const personName=req.params.name ;
    Person.find({name:personName},(err,data)=>{
        if(err) {
            console.log(err) 
        }
        else {
            res.json(data)
        }
    });
})

//route to find one person with given favorite food
route.get('/foods/:food',(req,res)=>{
    const food=req.params.food ;
    Person.findOne({favoriteFoods:food},(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.json(data) 
        }
    })
})

//route to search  by id 
route.get('/list/:id',(req,res)=>{
    const personId=req.params.id ;
    Person.findById({_id:personId},(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.json(data)
        }
    })
}) 

//route find by id and update 
route.put('/:id',(req,res)=>{
    const personId=req.params.id ;
    const food=req.body.newFood ;
    console.log(food)
    Person.findById(personId,(err,data)=>{
        if(err) console.log(err) 
        else {
            var favoriteFoods=data.favoriteFoods ;
            favoriteFoods.push(food) ;
            data.favoriteFoods=favoriteFoods ;
            data.save((err,data)=>{
                if(err) console.log(err)
                else {
                    res.send(data) ;
                }
            })
        }
    })
    /*const newData=req.body
    Person.findByIdAndUpdate(personId,newData,(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.json(data)
        }
    })*/
})

//route to update age of one person 
route.put('/update/:name',(req,res)=>{
    const namePerson=req.params.name ;
    Person.findOneAndUpdate({name:namePerson},{$set:{age:20}},{ new: true },(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.send(data)
        }
    })
})

//route to search by id and delete 
route.delete('/:id',(req,res)=>{
    const idPerson=req.params.id ;
    Person.findByIdAndDelete(idPerson,(err,data)=>{
        if(err) {
            console.log(err)
        }
        else {
            res.send("Person deleted !")
        }
    })
})

module.exports=route ;