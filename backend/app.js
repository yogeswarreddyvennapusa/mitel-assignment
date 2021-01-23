const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const mongoose = require('mongoose');

mongoose.Promise = Promise

app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {extended:true}))

mongoose.connect('mongodb://localhost:27017/mitel_assignment')
.then( ()=> console.log('Mongoose Up'))

const usersSchema= mongoose.Schema( {
 users: [ {
  id: String,
  name: String,
  email: String,
  age: Number,
  plan: {
   type: String,
   status: String,
   description: String,
   features: {
    conferenceCalling: Boolean,
    callWaiting: Boolean,
    voiceMail: Boolean,
   }
  }
 }]
});

var model= mongoose.model('users', usersSchema);

app.use((req, res, next) => {
 res.setHeader("Access-Control-Allow-Origin", "*");
 res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
 res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
 next();
}) 

app.post("/api/saveusers", (req, res, next) => {
const mod = new model(req.body);
   mod.save( (err, data) => {
   if(err) {
    res.send(err);
   } else {
    res.send({data: "Record has been Inserted"});
   }
  })
})

app.get("/api/users", (req, res, next) => {
 model.find().then(userData => {
  res.status(200).json({
   message : "UserData Fetched Succesfully",
   users: userData
  })
 })
})



module.exports= app;
