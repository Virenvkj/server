const express = require('express');

const app = express();

app.use(express.json())
app.get('/', (req, res) => {
    res.send('hello world get call');
})

app.post('/', (req, res) => {
    res.send('hello world post call');
})

app.get('/about', (req, res) => {
    console.log(req);
    res.send(`Hi I am  ${req.query.name}  from about page`);
})

app.get('/user/:user_id', (req, res) => {

    const id = req.params["user_id"]
    console.log(req.params)
    console.log(req.body)

    res.send(`User ID ${id}`);
})

app.post('/about', (req, res) => {
    console.log(req.query.name);
    /// Data fetching from query or params
    /// Dababase operations
    /// Sending the response based on that data
    res.send('Hi I am ' + req.query.name);
})


app.listen(3000);