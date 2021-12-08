import express from "express";
import models from "./models/index.js";
import mongoose from 'mongoose';
const port = 4500;
const app = express();
 
// middleware
app.use(express.json());

const log = msg => console.log(msg);

// connect mongoDB
const uri = `mongodb://root:PASSWORD@localhost:27017/malkoi?authSource=admin`
const options = {};
const connectWithDb = ()=>{
    mongoose.connect(uri, options, (error, db)=>{
        if(error){
            console.log(error);
            console.log("Database connection faill.");
        }
        else{
            log("Database connection successful.");
        }
    });
};

connectWithDb()

// create api or url
app.post('/', (req, res)=>{
    // console.log(req)
    const body = req.body;
    // console.log(body);
    const user = new models.User({username:body.username, createdAt:new Date()})
    user.save().then(savedUser=>{
        res.status(201).send("user saved id "+savedUser._id);
    })
    .catch((error)=>{
        console.log(error);
        res.status(500).send("failed to saved")
    })
})

app.listen(port, ()=>{
    console.log('listening port ', port);
})

log(models)