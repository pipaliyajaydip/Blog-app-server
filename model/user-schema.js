// for validation user schema

import mongoose from "mongoose";

const user_Schema = mongoose.Schema({
    name : {
        required : true,
        type : String
    },
    email : {
        required : true,
        type : String
    },
    username : {
        required : true,
        type : String,
        unique : true
    },
    password : {
        required : true,
        type : String
    }
});

// for which collection to apply our schema
const userSchema = mongoose.model('blogs',user_Schema);

export default userSchema;

