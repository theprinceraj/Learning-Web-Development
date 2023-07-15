const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// for serving static files
app.use('/static', express.static('static'));


// Set the template engine as Pug
app.set('view engine', 'pug');

// Set the views directory
app.set('views', path.join(__dirname, 'views'));

// Our pug demo endpoint
app.get('/demo', (req, res) => {
    res.status(200).render('demo', { title: 'Hey Bhaalu!', message: 'Hello there and thanks for telling me how to use Pug!' })
})

// app.get('/', (req, res) => {
//     res.send("This is my first express app with Harry.");
// });

app.get('/', (req, res) => {
    res.status(201).send("This is my home page of my first express app with Harry.");
});

app.get('/about', (req, res) => {
    res.send("This is my about page fr!");
});

app.post("/about", (req, res) => {
    res.send("This is fr inside app.post!!");
})

app.post("/this", (req, res) => {
    res.status(404).send("Page not found.");
})

app.listen(port, () => {
    console.log(`Application started succesfully on port ${port}`);
});