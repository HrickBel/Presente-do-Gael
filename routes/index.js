const DB = require('../database/database');
const Message = require('../model/Message');
const bodyParser = require('body-parser');

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
	Message.findAll({attributes:['name','message']}).then(result => {
	});
	res.render('index',{message:'aa'});
});


router.get('/message', function(req, res, next){
	res.render('message',{title:'message'});
});

router.post('/register', async function(req,res){
	Message.create({name: req.body.name , message: req.body.message}).then(
		() => {
			console.log('mensagem registrada com sucesso ', req.body.name ,' ', req.body.message);
			res.render('index');
		}).catch(
		() => {
			console.log('mensagem não registrada');
			res.render('message');
		});
});

module.exports = router;
