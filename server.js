// gives access to express library
const express = require('express')

// creates an instance of express called app
const app = express()
app.use(express.json());

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
        user : req.params.id
    })
})

app.post('/login', function(req, res) {
    const username = req.body.username
    const password = req.body.password
    const mockUsername = "billyTheKid"
    const mockPassword = "superSecret"

    if (username === mockUsername && password === mockPassword) {
        res.json({
            success : true,
            message : 'password and username match!',
            token : 'encrypted token goes here'
        })
    } else {
        res.json({
            success : false,
            message : 'password and username do not match'
        })
    }
})

app.post('/users', function(req, res){
    const username = req.body.username
    const password = req.body.password
    const newUser = {
        username,
        password
    }
    if (newUser.username && newUser.password) {
        res.json({
            success : true,
            message : 'new user created',
            user : newUser
        })
    }
})











// starts the server on port 8080
app.listen(8080, function(){
    console.log("server is running");
});


