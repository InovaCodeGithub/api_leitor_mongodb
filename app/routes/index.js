const moment = require('moment')
const mongoose = require('mongoose')


module.exports = function(app){
moment.locale('pt-br')

mongoose.connect('mongodb://localhost:27017/apileitor', { useNewUrlParser: true },function(err,db){
    if(err){
        throw err
    }else{
        console.log('Conectado ao MongoDB')
    }
    db.close
})

const Leitor = mongoose.model('Leitor',{
  idLeitor: String,
  idTag: String,
  Data: {type: String, default: moment().format('L')},
  Hora: {type: String, default: moment().format('LTS')}
})

app.get('/postRead/:idLeitor/:idTag', function (req,res) {
  Leitor.create({
    idLeitor: req.params.idLeitor,
    idTag: req.params.idTag
  })
  res.end('Enviado.')
})

app.get('/getRead/:idLeitor',function(req,res){
  Leitor.find({idLeitor: req.params.idLeitor},{_id:0, __v:0}, function(err, leitor){
   res.json(leitor[0]) 
   console.log(leitor[0])
  })
})


}