import express from "express";
import { signupUser } from "../controller/contoller.js";

const router = express.Router()


// router.post('/name',(req,res) => {
//     res.status(201).json( {meassage : "Hello"});
// })

// router.post('/',(req,res) => {
//     res.status(201).json( {meassage : "Hello server"});
// })

router.post('/signup',signupUser);

export default router;