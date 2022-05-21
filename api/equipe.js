var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());

const Equipe = require('../models/equipe')

router.get('/home', function(req, res, next) { 
    res.end('Welcome to You in equipe Home Page');
});


//create equipe 
router.post('/add_equipe',async (req,res)=>{
    const equipe = new Equipe({
        id: req.body.id,
        admin: req.body.admin,
        member : req.body.id_mem
    })
    
    equipe.save()
    .then(resp=>{
        res.send("add with id: "+resp._id)
    })
    .catch(err=>{
        res.send(err.message)
    })
})

//add a memeber 
router.patch('/update',(req,res)=>{
    const id  = req.body._id;
    const update = Equipe.updateOne({
        _id:id
    },{
        $set: {
            admin: req.body.admin,
            member : req.body.id_mem
        }
    })
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.send(err.message)
    })
})

//add a member 
router.patch('/update/terrain',(req,res)=>{
    const id  = req.body._id;
    const update = Equipe.updateOne({
        _id:id
    },{
        $set: {
            terrain : req.body.terrain
        }
    })
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.send(err.message)
    })
})

//update a date 
router.patch('/update/terrain',(req,res)=>{
    const id  = req.body._id;
    const update = Equipe.updateOne({
        _id:id
    },{
        $set: {
            date : req.body.date 
        }
    })
    .then(resp=>{
        res.send(resp)
    })
    .catch(err=>{
        res.send(err.message)
    })
})



module.exports = router;