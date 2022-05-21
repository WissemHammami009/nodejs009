
const mongo = require('mongoose')

const terrain = mongo.Schema({
    id: {
        type: String,
        required: true
    },
    name: {
        type:String,
        required:true
    },
    location: {
        type:String,
        required: true
    },
    type: {
        type:String,
        required: true
    },
    prix:{
        type:String,
        required:true
    },
    prop_id: {
        type:String,
        required:true
    },
    date_add: {
        type: Date,
        default: Date.now
    }


})

module.exports = mongo.model('terrain',terrain,"terrain")