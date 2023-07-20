const express = require('express');
const User = require('../models/User');
const router = express.Router();


 

router.post( '/', async(req , res)=>{
     try {
        const user = new User(req.body)
         res.send(req.body) ;
        await user.save() ;
         res.status(200).json(e);
       
    } catch (e) {
        res.status(500).json(e); 
    }
})
    


module.exports = router 