var express = require('express')
var app = express()
app.set('view engine','pug')
app.use(express.static('public'))
app.get('/', function(req,res,next){
  res.render('index')
})
app.listen(80, function(error){
  if (error) return console.log(error), process.exit(1)
  else return console.log('Escuchando...')
})
