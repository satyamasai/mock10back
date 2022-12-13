

const express= require("express");



const authentication =(req,res,next)=>{


const user_id = req.headers?.authorization?.split(" ")[1];
 
// const {userId} = req.headers;
    console.log(user_id,"in auth")
    req.body.user_id=user_id
// if(userId){
    next()
// }
 


}


module.exports={
    authentication
}