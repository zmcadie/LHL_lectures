var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

const users = {
  mario: {
    name: "Mario",
    initial: "M",
    color: "#E52521",
    password: "princess peach"
  },
  luigi: {
    name: "Luigi",
    initial: "L",
    color: "#43B047",
    password: "luigi bros"
  },
  wario: {
    name: "Wario",
    initial: "W",
    color: "#FBD000",
    password: "purplenose"
  }
}

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// setup terminal request logging
app.use(logger('dev'));

// incoming request parsing setup
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// GET home page
app.get('/', function(req, res, next) {
  // create empty user, this will be used if no cookie is found
  const user = {}
  // check if a cookie is set
  const username = req.cookies.user

  // if the request includes a cookie and that user exists in our database
  // extract user data and save to our user object
  if (username && users[username]) {
    user.name = users[username].name
    user.initial = users[username].initial
    user.color = users[username].color
  }
  
  // render homepage and include user data for logged in users
  res.render('index', { user: user });
});

app.post('/login', function(req, res) {
  // accept user information
  const userLogin = req.body
  
  // check if username exists
  const user = users[userLogin.name.toLowerCase()]
  // if user exists
  if (user) {
    // if password matches
    if (user.password === userLogin.password) {
      // this log will appear in the server terminal, NOT on the browser
      console.log("passwords match!")
      // set cookie with name = "user" and value = users name (lowercase)
      res.cookie("user", user.name.toLowerCase())
      // redirect to homepage
      // early return to stop the function
      return res.redirect("/")
    }
  }

  // send unautherized error response if something went wrong
  res.status(401).send("Whoops! That didn't work")
});

app.get('/logout', function(req, res) {
  // clear cookies
  res.clearCookie("user")
  // redirect to home
  res.redirect("/")
})

module.exports = app;
