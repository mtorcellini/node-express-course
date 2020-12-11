// gives access to express library
const express = require('express');

// creates an instance of express called app
const app = express();


// starts the server on port 8080
app.listen(8080, function(){
    console.log("sever is running");
});


