const mongoose=require('mongoose') ;
const personPrototype=mongoose.Schema({
    name :{
        type:String ,
        required :true 
    },
    age: { type: Number, min: 1} ,
    favoriteFoods: Array 
})

module.exports=mongoose.model('person',personPrototype) ;