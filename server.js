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

app.get('/users/:id', function(req, res) {
    console.log(req.params.id)
    res.json({
        success : true,
        message : 'got one user',
        user : req.params.id
    })
})












// starts the server on port 8080
app.listen(8080, function(){
    console.log("server is running");
});


