const express=require('express');
const mongoose=require('mongoose')


// step-1 connecting with mongoose
async function connect()
{
  await mongoose.connect("mongodb+srv://dd1472945:deva1234@deva.55hpp.mongodb.net/");
  console.log("db connected");
}


connect()


const server=express();
// step-2 creating schema
const Phonebook= new mongoose.Schema(
   {
       name:String,
       phone:String,
       location:String
   },
   {
     collection:'PHONEBOOK'
   }
)


// step-3 creating model
const Model= mongoose.model('PHONEBOOK',Phonebook)

server.get('/',(req,res)=>{
   res.send("app is working fine")
})

server.get('/db',async (req,res)=>{
       const data = await Model.find({});
       res.json(data)
})

server.get('/db/:id', async (req,res)=>{
       const data= await Model.findOne({ _id: req.params.id })
       console.log(data);
       res.json(data)
})

// server.post(‘/postdata’)
server.get('/postdata', async (req,res)=>{
   const data=new Model()   // step1 creating instance of model
   // step-2 declaring data using model instance (data)
   data.name="deva"
   data.phone="9043368998"
   data.location="erode"


   // step-3 saving the data created
   await data.save()
   console.log("data saved");
   res.json(data)


})


// server.delete(‘/delete/:id’)
server.get('/delete/:id',async (req,res)=>{
       await Model.deleteOne({ _id : req.params.id})
})

server.listen('8000',()=>{
   console.log("server is running");
})