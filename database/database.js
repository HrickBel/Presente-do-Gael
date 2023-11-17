const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
	'',
	'',
	'',
	{
		host:'',
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
