const express = require('express');
const app = express();
const path = require('path');

//Routes
const indexDetails = require('./routes/index');
const userDetailsRoute = require('./routes/user-details')



app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(express.urlencoded({ extended: true }));
app.use(express.json());// For parsing incoming request

//Register routes
app.use(userDetailsRoute);
app.use(indexDetails.routes) //Default page
app.use(express.static(path.join(__dirname, 'public'))); //To have access to public folders



app.listen(3000);


