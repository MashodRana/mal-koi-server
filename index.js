import express from "express";
import connectWithDb from "./mongo";
import configure from "./controllers";

const port = 4500;
const app = express();
 
// middleware
app.use(express.json());

// Connect with MongoDB.
connectWithDb()

configure(app);

app.listen(port, ()=>{
    console.log('listening port ', port);
})


/*
1. up and running the express server
2. configure the express server.
3. handle the routes of the server

- use directory import
- use async await function


- 3 layers architecture
    = controler layer: process the http request
    = service layer: process the object and send it to data lalyer.
    = data layer: process the data and get/set it to the database.

*/