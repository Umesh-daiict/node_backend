// const express  = require("express");
// const bodyParser = require("body-parser");
// const { postCreateUser } = require("./controller/user-controller");
import express from "express";
import bodyParser from "body-parser";
import { allUsers, postCreateUser } from "./controller/user-controller.js";

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
