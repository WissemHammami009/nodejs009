var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')

router.use(bodyParser.json());

const  Terrain = require('../models/terrain');

router.get('/home', function(req, res, next) { 
    res.end('Welcome to You in Terrain Home page');
});

router.post('/add_terrain',async (req,res)=>{
    const terrain = new Terrain({
        id: req.body.id,
        location: req.body.location,
        type: req.body.type,
        prop_id: req.body.prop_id,
    })
    
    terrain.save()
    .then(resp=>{
        res.send("add with id: "+resp._id)
    })
    .catch(err=>{
        res.send(err)
    })
})


//update name 
router.patch('/update/name',(req,res)=>{
    const id  = req.body.id;
    const update = Sportif.updateOne({
        _id:id
    },{
        $set: {name:req.body.name}
    })
    .then(resp=>{
        res.send(resp.acknowledged)
    })
    .catch(err=>{
        res.send(err)
    })
})

//update type 
router.patch('/update/type',(req,res)=>{
    const id  = req.body.id;
    const update = Terrain.updateOne({
        _id:id
    },{
        $set: {type:req.body.type}
    })
    .then(resp=>{
        res.send(resp.acknowledged)
    })
    .catch(err=>{
        res.send(err)
    })
})

//afficher terrain
router.post('/getdata',(req,res)=>{
    const data = {
        type: req.body.type,
        location : req.body.location,
}

const getdata = Terrain.findOne(data)
.then(resp=>{
    if (resp ==null) {
        return res.send("Null")
    }
    res.status(200).json({ terrain: resp })
    
})
.catch(err=>{
    res.send(err)
})
})



module.exports = router;