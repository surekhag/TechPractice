const express = require("express")
const app= express();
const port = process.env.port || 4000;
app.get("/", (req,res)=>{
res.send("Hii")
console.log("listening to you dear")
})
app.listen(port, ()=>{
console.log("App started at port : ", port)
})