const express = require('express');
const router =express.Router();
const axios = require('axios');
const verifyUser = require('../middleware/verifyJWT.js');

const {registerUser, loginUser} = require('../controllers/registerController.js');
const {addReview,sendReview}= require('../controllers/reviewController.js');
const refresh= require('../controllers/refresnController.js');
 


const saveUser=require('../controllers/saveController.js');
const {sendUser}=require('../controllers/usersController.js');
const cors = require('cors');




router.post('/register',registerUser)
router.post('/login', loginUser)
router.post("/review",addReview)
router.put('/save',saveUser)

router.get("/review",sendReview)
router.get('/user',verifyUser,sendUser)

router.get('/refresh',verifyUser,refresh)


router.post('/keywords', async (req,res)=>{
    //res.send('keywords')
    try{
        const {descriptionData} = req.body;
        const response =await axios.post('http://localhost:5009/nlp', {descriptionData});
        const locations=response.data;
        res.send({locations});
    }catch (error){
        console.error("Error loading the python file", error);
    }
    
})


module.exports=router