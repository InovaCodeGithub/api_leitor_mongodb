
const mongoose = require('mongoose')

module.exports = function(){
    mongoose.connect('mongodb://localhost:27017/apileitor', { useNewUrlParser: true },function(err,db){
    if(err){
        throw err
    }else{
        console.log('connected')
    }
    db.close
})
}