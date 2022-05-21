var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser')
const crypto = require('crypto')
router.use(bodyParser.json());

const  Terrain = require('../models/terrain');

router.get('/home', function(req, res, next) { 
    res.end('Welcome to You in Terrain Home page');
});

router.post('/add_terrain',async (req,res)=>{
    let id = crypto.randomBytes(10).toString('hex')
    const terrain = new Terrain({
        id: id,
        name:req.body.name,
        location: req.body.location,
        type: req.body.type,
        prix: req.body.prix,
        prop_id: req.body.prop_id,
    })
    
    terrain.save()
    .then(resp=>{
        res.json({added:{new_terrain:"yes"}})
    })
    .catch(err=>{
        res.json({added:{new_terrain:"no"}})
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



//afficher terrain with type and location
router.post('/getdata',(req,res)=>{
    const data = {
        type: req.body.type,
        location : req.body.location,
    }

const getdata = Terrain.find(data)
.then(resp=>{
    if (resp == null) {
        return res.json(
            {dataterrain:{exist:'no'}
        })
    }
    else {
        res.json({dataterrain:{ exist:'yes',terrain: resp }})
    }
    
    
})
.catch(err=>{
    res.send(err)
})
})
//afficher terrain with type and location
router.post('/getdata/all',(req,res)=>{
    

const getdata = Terrain.find()
.then(resp=>{
    if (resp == null) {
        return res.json(
            {dataterrain:{exist:'no'}
        })
    }
    else {
        res.json({dataterrain:{ exist:'yes',terrain: resp }})
    }
    
    
})
.catch(err=>{
    res.send(err)
})
})

//afficher terrain with id for admin_terrain
router.post('/admin_terrain/list',(req,res)=>{
    const data = {
        prop_id:req.body.id
    }

const getdata = Terrain.find(data)
.then(resp=>{
    if (resp == null) {
        return res.json(
            {dataterrain:{exist:'no'}
        })
    }
    else {
        res.json({dataterrain:{ exist:'yes',terrain: resp }})
    }
    
    
})
.catch(err=>{
    res.send(err)
})
})

//delete a terrain 
router.post('/delete',(req,res)=>{
    id = req.body.id;
    const data_to_delete = Terrain.deleteOne({id:id}).then(resp=> {
        if (resp == null ){
            return res.json({data:{delete:"no"}})
        }
        else if(resp.deletedCount == 0){
            res.json({data:{delete:"no"}})
        }
        else (
            res.json({data:{delete:"yes"}})
        )
    })
})



//modify a terrain 
router.patch('/modify',(req,res)=>{
    let data =  {id:req.body.id}
    let json =   { }
   if (req.body.name != undefined) {
      json.name = req.body.name
   }
   if (req.body.location != undefined) {
       json.location = req.body.location
   }
   if (req.body.type != undefined) {
       json.type = req.body.type
   }
   if (req.body.prix != undefined) {
       json.prix = req.body.prix
   }

   const update  = Terrain.updateOne(data,{$set: json}).then(resp=>{
       if(resp.matchedCount == 0){
        res.json({data:{update:"no"}})
       }
       else {
           res.json({data:{update:"yes"}})
       }
   })
})




module.exports = router;