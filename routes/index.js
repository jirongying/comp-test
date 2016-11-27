var express = require('express');
var router = express.Router();
var autoService = require('../services/autoService.js');
var contant = require('../common/WebConstant.js');

router.get('/', function(req, res, next) {
  res.render('index', {title:contant.title});
});

router.post('/compare', function(req, res, next) {
  var url = req.body.url.trim();
  var host = req.body.host.trim();
  var servers = req.body.servers;
  servers = servers.split(',');
  for(var i =0 ;i<servers.length;i++){
      if(!isValidIP(servers[i])){
        console.log("非法的ip ，" + servers[i]);
      }
  }
  var param = {url:url,host:host,servers:servers};
  autoService.compare(param,function(err,items){
    if(err){
      res.render('error', {message:err});
    }
    res.render('items', {items:items});
  });
});

function isValidIP(ip)
{
  var reg =  /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/
  return reg.test(ip);
}

module.exports = router;
