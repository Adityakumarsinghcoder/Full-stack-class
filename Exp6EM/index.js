const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send("This is the home page")
})
app.get('/api/students', (req, res) => {
    res.send('This is student api')
})
app.post('/api/login', (req, res) => {
    res.send('Data received')
})

app.listen(3000, () => {
    console.log('Server is running')
})