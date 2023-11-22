const mongoose = require("mongoose")

const URI = process.env.MONGODB_URI 

//MongoDB USERNAME - dhruv
//        PASSWORD - qwertyuiop

// An async function in Node.js is a function that operates asynchronously by returning a Promise.
//  The async keyword is used to define such functions. 
//  Inside an async function, you can use the await keyword to wait for the resolution of a Promise without blocking the execution of the entire program.
//NOTE: It is necessary to handle the promise , else it will return error
//     MATLAB AGAR "ASYNC" KEYWORD USE HUA HAI, TOH "AWAIT" KEYWORD BHI SUE HOGA HI HOGA.......
const connectDb = async () =>{
    try{
        await mongoose.connect(URI) //this await fill return a promise that is handeled using '.then' in server.js file
        console.log("connection sucessful to DB")
    }
    catch(error){
       console.error("database connection failed")
       process.exit(0)
    }

//try and catch are keywords and they are part of error-handling mechanisms. The purpose of try and catch is to manage and handle exceptions or errors that may occur during the execution of a block of code.

// try block: The code that may cause an exception or an error is placed inside the try block. If an exception occurs within this block, it is thrown, and the normal flow of code is interrupted.

// catch block: If an exception is thrown inside the try block, the control is transferred to the corresponding catch block. The catch block contains code that handles or logs the error. It allows you to gracefully respond to errors and prevent them from crashing the entire application.
}

module.exports = connectDb

