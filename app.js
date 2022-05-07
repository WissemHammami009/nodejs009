const express = require('express')

const mongodb = require('mongoose')

const crypto = require('crypto')

const app = express()
const env = require('dotenv/config')
var bodyParser = require('body-parser')

app.use(bodyParser.json());

const userroute = require('./api/user')
const sportroute = require('./api/terrain')
const equiperoute = require('./api/equipe')
const admin_terrain = require('./api/admin_terrain')
app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.use('/api/sportif/',userroute)
app.use('/api/terrain/',sportroute)
app.use('/api/equipe/',equiperoute)
app.use('/api/admin/',admin_terrain)


app.get('/test/:id', function(req, res, next) { 
    let id  = req.params.id;
    let hash = crypto.createHash('md5').update(id).digest("hex")
    res.send(hash)
});
app.listen('3000',()=>{
    console.log('server running !!')
})

mongodb.connect(process.env.DB,(err)=>
{   
    if (err) {
        return console.log(err.message);
    }
    console.log('connected to database');
})
