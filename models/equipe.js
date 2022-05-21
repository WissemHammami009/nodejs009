
const mongo = require('mongoose')

const Equipe = mongo.Schema({
    id: {
        type: String,
        required: true
    },
    admin: {
        type: String,
        required: true
    },
   member: {
       type: Array,
       items:{
        type:String
       },
       maxItems: 4,
       uniqueItems: true
   },
   terrain:{
    type:String,
    required:true
   },
   date:{
       type:Date,
       required:true
   }
})

module.exports = mongo.model('Equipe',Equipe,"equipe")