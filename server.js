const express = require("express");
const app = express();


const authorize = require("./auth");
const {google} = require('googleapis');


app.use(express.json());
app.disable("x-powered-by");


/**
 * This endpoint is executed when receive new email
 *  
 * */
app.post("/",async(req,res)=>{

    console.log("processing emails")
    const auth = await authorize();
    const gmail = await google.gmail({version: 'v1', auth});
    const time = 1 * 60 * 1000; // 1 minute only for testing
    setTimeout(verifySecondEmail,time); 

    return res.status(200).json({
        message:"Processing Request"
    });

})


async function twilio(){
    console.log("Sending Notification by Twilio")
}

async function verifySecondEmail(){
    console.log("verifying the second email")
    const receiveSecondEmail = false;
    if(!receiveSecondEmail){
        twilio();
    }
}


app.listen(3000,()=>{
    console.log("server listening in port 3000");
})