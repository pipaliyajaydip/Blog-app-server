import express from "express";
import cors from 'cors'

// for database
import { Connection } from "./database/db.js";
import router from "./routes/route.js"

const app = express();

const PORT = 8000;

Connection();

// for cors
app.use(cors())

// for body-parser
app.use(express.json({
    extended : true
}));

// for usr encoded (space %2d%3 like)
app.use(express.urlencoded({
    extended : true
}));

app.use('/',router)

app.listen(PORT,() => {
    console.log(`server is running on port : ${PORT}`);
})