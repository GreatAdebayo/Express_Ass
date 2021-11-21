const express = require('express');
const router = express.Router();

const indexDetail = require('../routes/index')

const details = {name:'', password:'', check:''};

router.get('/user-details', (req, res) => {
    res.render('user-details', {pageTitle:'User Details', path:'/user-details', details:indexDetail.details})
})





module.exports = router;