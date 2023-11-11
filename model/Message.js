const Sequelize = require('sequelize');
const database = require('../database/database');

const Message = database.define(
	'Message',{
		id:{
			type: Sequelize.DataTypes.INTEGER,
			autoIncrement:true,
			primaryKey:true
		},
		name:{
			type: Sequelize.DataTypes.STRING,
			allowNull:false
		},
		message:{
			type: Sequelize.DataTypes.TEXT,
			allowNull:false
		}
	}
);

Message.sync();

module.exports = Message;