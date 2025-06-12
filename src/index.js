import dotenv from "dotenv";
/*import mongoose from "mongoose";
import {DB_NAME} from "./constants";*/
import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})

connectDB()

/*
const app = express()
( async ()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}
            /${DB_NAME}`)
            app.on("errror",(error)=>{
                console.log ("error",errror);
                throw error
            })
            app.listen(process.env.PORT,()=>{
                console.log(`app is listning on port ${process.env.PORT}`)
            })
    } catch (error ) {
        console.error("ERROR:",error)
        throw err
    }
})()
    */

