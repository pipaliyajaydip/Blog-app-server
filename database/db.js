import mongoose from 'mongoose';



export const Connection = async () => {

    const dbURL = `mongodb://127.0.0.1:27017/blogpost`;

    try{
       await mongoose.connect(dbURL,{useUnifiedTopology : true, useNewUrlParser : true})
        console.log("Database connected");
    } catch (error){
        console.log("Error while connecting with the database", error)
    }
}
