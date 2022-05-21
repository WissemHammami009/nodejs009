
const mongo = require('mongoose')

const Admin_terrain = mongo.Schema({
    cin: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
   surname: {
       type:String,
       required: true
   },
   email: {
       type:String,
       required: true
   },
   ville: {
       type:String,
       required:true
   },
   password: {
       type:String,
       required:true
   },
   reset_id_bs: {
    type:String,
    required: true,
    length:50
},
reset_id_as: {
    type:String,
    length:50,
    default:null
},
confirm: {
    type:String, 
    length:3,
    default:"no"
},
code_confirm: {
    type:String,
    length:30,
},
id_pass:{
    type:String,
    length:10,
    default:""
}

})

module.exports = mongo.model('admin_terrain',Admin_terrain,"admin_terrain")