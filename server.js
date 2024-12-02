require('./models/db');
const mongoose = require('mongoose');
const Student = mongoose.model('Student');

const express = require('express');
const path = require('path');
const { engine } = require('express-handlebars');
const bodyparser = require('body-parser');

const port = process.env.PORT || 3000;

const adminController = require('./controllers/adminController');
var app = express();

//loading static content
app.use('/public', express.static('public'))

app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', engine({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');


app.listen(port, () => {
    console.log(`Express server started at port: ${port}`);
});

const publicPath = path.join(__dirname, 'public');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(`${publicPath}/homepage.html`)
})

app.get('/studentlogin', (req, res) => {
    res.render("student/studentlogin", {
        viewTitle: "Student Login"
    });
});

app.post('/studentlogin', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await Student.findOne({ email: email });
        if (email === user.email && password == user.password) {
            res.render("exam/exam", {
                viewTitle: user.fullName
            });
        }
        else {
            res.send("Email or passoword is incorrect");
        }
    }
    catch (error) {
        res.status(400).send("Invalid Credentials");
    }
});

app.get('/admin-authorization', (req, res) => {
    res.render("admin/adminLoginAuth");
});


app.use('/admin', adminController);