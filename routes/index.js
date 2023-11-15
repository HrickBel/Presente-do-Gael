const DB = require('../database/database');
const Message = require('../model/Message');
const bodyParser = require('body-parser');

var express = require('express');
var router = express.Router();

var result = [];

Message.findAll({attributes:['name','message'],raw:true}).then((rs) =>{
	result = rs;
});

/* GET home page. */
router.get('/', function(req, res, next) {
	Message.findAll({attributes:['name','message'],raw:true}).then((rs) =>{
		result = rs;
	});
	res.render('index',{rs:result});
});


router.get('/message', function(req, res, next){
	res.render('message');
});

router.post('/register', async function(req,res){
	if(req.body.name !== '' && req.body.message !== ''){
		Message.create({name: req.body.name , message: req.body.message}).then(function(){
			res.redirect('/');
		});
	}else{
		console.log('mensagem não registrada');
		res.redirect('message');
	}
});

module.exports = router;
