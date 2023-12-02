
import userSchema from "../model/user-schema.js";

export const signupUser = async (req,res) => {
    const signuptData = req.body;
    // console.log(signuptData)
    const saveData = new userSchema(signuptData)
    // console.log(saveData.username)
    try{
        // const usr = await userSchema.find({username : saveData.username});
        // console.log('from database',usr)
        // if(usr){
        //     return res.status(409).json({message : "Username already taken. Please try new username"})
        // }else{
            await saveData.save();
            return res.status(200).json({message: "Signup successful" })
        // }
    } catch (error) { 
        return res.status(500).json({message: "error while signup user" })
    }
}