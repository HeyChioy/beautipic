var superagent = require('superagent');
var all = function(cbk){
  var nc = new Date().getTime();
  var url = "http://cn.bing.com/HPImageArchive.aspx?format=js&idx=0&n=8&nc={date time}&pid=hp&video=1".replace("{date time}",nc);
  superagent.get(url).end(function(err,sres){
    if(err){
      cbk(err,{});
    }else{
      var images = {};
      images.images = JSON.parse(sres.text).images;
      cbk(err,images);
    }
  })
};

var first = function(cbk){
  this.all(function(err,images){
    cbk(err,images.images[0])
  })
}

var randomOne = function(cbk){
  this.all(function(err,all){
    var random = parseInt((Math.random()*10000%all.images.length))
    cbk(err,all.images[random])
  })
}

var get = function(idx,cbk){
  if(typeof idx != "number"){
    idx = 0
  }
  this.all(function(err,all){
    cbk(err,all.images[parseInt(i%8)])
  })
}


exports.all = all;
exports.first = first;
exports.randomOne = randomOne;
exports.get = get;
