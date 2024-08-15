// import dotenv from "dotenv";
// dotenv.config({ debug: true, path:'./.env'});

import express from "express";
import bodyParser from "body-parser";
import { allUsers, postCreateUser } from "./controller/user-controller.js";
console.log("host:",process.env.db_database)

const app = express()

const port = 3000
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}))

app.get("/",(req,res)=>{
    res.send("Hi Node + post nodemon")
})

app.listen(port,()=>{
    console.log("App runing on ", `http://localhost:${port}/`)
})  

app.get("/users",allUsers)
app.post("/user",postCreateUser)
