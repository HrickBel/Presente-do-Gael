const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	'heroku_c9802116e3bd2d2',
	'bb73019fd002dc',
	'ce1a5d83',
	{
		host:'us-cdbr-east-06.cleardb.net',
		dialect:'mysql'
	}
);

sequelize.authenticate().then(function(){
	//conexão realizada com susesso
	console.log('conectado');
}
).catch(function(){
	console.log('falha na conexão');
}
);

module.exports = sequelize;