var express = require('express');
var router = express.Router();

router.post('/updateAccount', function(req, res, next) {
	console.log('updated...')
  res.send({account:account});
});

router.post('/accounts', function(req, res, next) {
  res.send({accounts:accounts});
});

router.post('/findAccounts', function(req, res, next) {
  var account = req.body.account;
  var id = parseInt(account.id)
  if(id<5){
	  res.send({accounts:accounts});
  }else{
	  res.send({accounts:null});
  }
  
});

router.get('/account/:id', function(req, res, next) {
  var id = parseInt(req.params.id);
  res.send({account:accounts[id-1]});
});


var account = {
    id: 2,
    date: '2016-05-04',
    name: '王小虎2updat',
    address: '上海市普陀区金沙江路 1512 弄'
  }

var accounts = [{
    id: 1,
    date: '2016-05-02',
    name: '王小虎1',
    address: '上海市普陀区金沙江路 1511 弄'
  }, {
    id: 2,
    date: '2016-05-04',
    name: '王小虎2',
    address: '上海市普陀区金沙江路 1512 弄'
  }, {
    id: 3,
    date: '2016-05-01',
    name: '王小虎3',
    address: '上海市普陀区金沙江路 1513 弄'
  }, {
    id: 4,
    date: '2016-05-03',
    name: '王小虎4',
    address: '上海市普陀区金沙江路 1514 弄'
  }]


module.exports = router;
