var express = require('express');
var app = express();
var mongoose = require('mongoose');

const bodyParser = require('body-parser');

//mongoose.connect("mongodb://localhost/yelp_camp_v4", { useNewUrlParser: true, useUnifiedTopology: true });
const PORT = 3001;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

var todos = []

app.get('/', async (req, res) => {
    res.render('home',{todos});
})
app.post('/', async (req, res) => {
    console.log(req.body.todo);
    todos.push(req.body.todo);
    console.log(todos);
    res.redirect('/');
})

app.get('/delete/:todo', async (req, res) => {
    var todo = req.params.todo;
    console.log(todo);
    var newTodos = [];
    todos.forEach(ele => {
        if (ele != todo)
            newTodos.push(ele);
    })
    todos = newTodos
    console.log(todos);
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, function () {
    console.log("App Started");
});
