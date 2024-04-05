const express=require("express");
const cors=require("cors");
const app=express();
app.use(cors());

app.get("/interest",function(req,res){
   const principal= parseInt(req.query.principal);
   const roi= parseInt(req.query.roi);
   const time= parseInt(req.query.time);
   const interest=(principal*time*roi)/100;
   res.send({
        interest:parseInt(interest)
   })
})
app.listen(3000)