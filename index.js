// console.log("Maheen");
require('dotenv').config()
const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/github',(req, res) => {
    res.send('maheenfarooqui');
})
app.get('/login',(req, res) => {
    res.send('<h1>please login first</h1>');
})

app.get('/youtube' , (req , res) => {
res.send('<h1>Maheen zuhra<h1/>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});