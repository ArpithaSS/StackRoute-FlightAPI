const express= require('express');

const app=express();
const Routes=require('./routes')

app.use(express.json());
app.use('/api',Routes);


app.listen(3000,()=>{
    console.log("Server running in Port 3000");
    })