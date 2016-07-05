var page = require('page');
var empty = require('empty-element');
var template = require('./template');
page('/', function (ctx, next) {
  var main = document.getElementById('main-container');
  var pictures = [
      {
        user: {
        username: 'ligl007',
        avatar: 'https://scontent-mia1-1.xx.fbcdn.net/v/t1.0-9/13605_10203828545467691_4037785333058957863_n.jpg?oh=df85aa65d974ef293429987adef4a959&oe=5802E37B'
        },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 0,
      liked: false,
      createdAt: new Date()
      },
      {
        user: {
        username: 'kevinmondragonb',
        avatar: ''
        },
      url: 'http://materializecss.com/images/office.jpg',
      likes: 1,
      liked: false,
      createdAt: new Date().setDate(new Date().getDate()-10)
      },
  ];
  empty(main).appendChild(template(pictures));
})
