import mongoose from "mongoose";


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

export default connectWithDb;