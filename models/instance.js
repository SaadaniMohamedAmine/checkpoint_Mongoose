const mongoose=require('mongoose') ;
const Person=require('./personPrototype') ;

const instance=()=>{
var instance1=new Person( {
    name :"Ahmed" ,
    age :29 ,
    favoriteFoods :["Salad"]
}) 
instance1.save((err,data)=>{
    if(err) {
        console.log(err)
    }
    else {
        console.log("Person added successfully") ;
    }
})
} 

module.exports=instance ;

