var express = require('express')
var app = express()
app.set('view engine','pug')
app.use(express.static('public'))
app.get('/', function(req,res,next){
  res.render('index',{title: 'Platzigram'})
})
app.get('/signup', function(req,res,next){
  res.render('index',{title: 'Platzigram - Signup'})
})
app.get('/signin', function(req,res,next){
  res.render('index', {title: 'Platzigram - Signin'})
})
app.get('/api/pictures', function(req,res,next){
  var pictures = [
      {
        user: {
        username: 'ligl007',
        avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/13605_10203828545467691_4037785333058957863_n.jpg?oh=df85aa65d974ef293429987adef4a959&oe=5802E37B'
        },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
      },
      {
        user: {
        username: 'kevinmondragonb',
        avatar: ''
        },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-1)
      },
  ];
  setTimeout(function(){
      res.send(pictures)
  },2000)

})
app.listen(80, function(error){
  if (error) return console.log(error), process.exit(1)
  else return console.log('Escuchando...')
})
