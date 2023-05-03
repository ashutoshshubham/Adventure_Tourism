// const express = require('express');       

const {Router} = require('express');       // importing Router from express

const Model = require('../models/packageModel')  //importing model from userModel


//initilizing express
// const router = express.Router();

const router = Router();

router.post('/add', (req, res) => {
    console.log(req.body);

    new Model(req.body).save()      //saving data in database

    .then((result) => {
        res.json(result)   //converting result into json
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err)
    });

    // res.send('response from /add in user router')
});


//Reading Data
//reading mostly use get method
router.get('/getall', (req,res) => {
    Model.find({})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.get('/getbyemail/:useremail', (req,res) => {
    Model.find({email : req.params.useremail})
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});
//using colon means it is url parameter.
//post use body, get use params




//delete data from database
//here delete method is used

router.delete('/delete/:packageid', (req,res) => {
    Model.findByIdAndDelete(req.params.packageid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});


router.get('/getbyid/:packageid', (req, res) => {
    Model.findById(req.params.packageid)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})


router.put('/update/:packageid', (req, res) => {

    Model.findByIdAndUpdate(req.params.packageid, req.body)
    .then((result) => {
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });

})





module.exports = router;                   //exporting router