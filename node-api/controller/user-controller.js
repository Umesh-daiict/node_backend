
import  pool  from "../db/db.js";
export const postCreateUser = (req,res)=>{
    const { name, email} = req.body;
    pool.query("INSERT INTO users(name,email) VALUES($1,$2)",[name,email],(err,results)=>{
        if(err){
            res.status(403).json(err)
            return 0;
        }
        res.status(201).json(results)
    })
}

export const allUsers = (req,res)=>{
    pool.query("SELECT * FROM  users",(err,results)=>{
        if(err){
            res.status(403).json(err)
            return 0;
        }
        res.status(201).json(results)
    })
}