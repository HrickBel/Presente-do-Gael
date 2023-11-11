var express = require('express');
var router = express.Router();
const db = require('../database/database');
const Message = require('../model/Message');



module.exports = Message.findAll(['name','message']).then( () => {
	console.log('query realizada');
	router.get
}).catch( () => {   
	console.log('query não realizada');
});