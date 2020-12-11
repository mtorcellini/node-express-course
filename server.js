// gives access to express library
const express = require('express')

// creates an instance of express called app
const app = express()

const mockUserData = [
    {name : 'Mark'},
    {name : 'Jill'}
]

app.get('/users', function(req, res) {
    res.json({
        success : true,
        message : 'successfully got users. Nice!',
        users : mockUserData
    })
})












// starts the server on port 8080
app.listen(8080, function(){
    console.log("server is running");
});


