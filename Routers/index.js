const express = require("express");
const app= express();
const port = process.env.port || 4000;
app.get('/test', (req,res)=>{
res.send('Hii0')   
console.log('listening to you dear', req);
})
app.listen(port, ()=>{
console.log("App started at port : ", port);
});
