/********************************************************************************* 
*  WEB322 – Assignment 6 
*  I declare that this assignment is my own work in accordance with Seneca  Academic Policy.   
*  No part of this assignment has been copied manually or electronically from any other source 
*  (including web sites) or distributed to other students. 
*  
*  Name: Raghav malhotra Student ID: 153547211 Date: 12/12/2022
* 
*  Online (Cyclic) URL: _______________________________________________________ 
* 
********************************************************************************/  


const express = require('express')

const app = express()

const port = process.env.port || 3500

app.set('view-engine','ejs')

app.get('/',(req,res)=>
{
    res.send("Welcome from the first cyclic demo app!!!")
})

app.get('/display',(req,res)=>{

    res.render("display.ejs",{author:'Raghav Malhotra'})
})

app.listen(port,()=>{

    console.log("App is listening at port 3500-----")
})

