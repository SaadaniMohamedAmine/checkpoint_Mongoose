const express=require("express") ;
const mongoose=require('mongoose') ;

mongoose.connect('mongodb+srv://mohamedAmine:salma123@checckpointdb.kpdol.mongodb.net/checkpointDB?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  },
(err)=>{
    if(err) {
        console.log(err)
    }
    else {
        console.log("Database connected successfully !")
    }
}) ;

const app=express() ;

app.listen(8080,(err)=>{
    if(err)  {
        console.log(err)
    } 
    else {
        console.log("Server is listening on port 8080")
    }
}) ;