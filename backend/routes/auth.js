const express = require('express');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//register
router.post('/register', async(req,res) => {
    try{

    }
    catch(err){
        res.status(500).json(err)
    }
})




//login





//logout