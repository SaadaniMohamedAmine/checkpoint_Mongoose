const mongoose=require('mongoose') ;
const peronPrototype=mongoose.Schema({
    name :{
        type:String ,
        required :true 
    },
    age: { type: Number, min: 18, index: true } ,
    favoriteFoods: [String] 
})

module.exports=mongoose.model('person',peronPrototype) ;