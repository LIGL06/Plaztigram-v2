var yo = require('yo-yo')
var layout = require('../layout')
var picture = require('../picture-card')
// var template = yo`<div class="container timeline">
//   <div class="row">
//     <div class="col s12 m10 offset-m1 l6 offset-l3">
//       content
//     </div>
//   </div>
// </div>`;
module.exports = function(pictures){
  var element = yo`<div class="container timeline">
    <div class="row">
      <div class="col s12 m10 offset-m1 l6 offset-l3">
        ${pictures.map(function(pic){
          return picture(pic);
        })}
      </div>
    </div>
  </div>`;
  return layout(element);
}
