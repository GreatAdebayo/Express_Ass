const express = require('express');
const router = express.Router();



router.get('/', (req, res, next) => {
 res.render('index', {pageTitle:'Home-Page', path:'/'});
})

const details = { email:'', password:''};

router.post('/user-details', (req, res) => {
details. email = req.body. email;
details.password = req.body.password
res.redirect('/user-details');
})



exports.routes = router;
exports.details = details;
