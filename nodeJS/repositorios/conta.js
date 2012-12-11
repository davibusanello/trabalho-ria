// Repositorio de contas
var banco = require('../infra/banco.js');
	require("../infra/string.js");
	
exports.list = function(coluna, direcao, limite, inicio, pagina, callback){
	var strSQL = "SELECT id, conta_id, NmConta, FgTipo FROM teContas" + 
		" ORDER BY " + coluna + " " + direcao +
		" LIMIT " + limite * (pagina - 1) + "," + limite;

	banco.consultaBanco(strSQL, function(err, info){

		var strQt = "SELECT COUNT(*) AS total FROM teContas";
		
		banco.consultaBanco(strQt, function(qt_err, qt_info){
			var resultado = { data : info, success : true, inicio : limite * (pagina - 1), total : qt_info[0].total };
			
			callback(resultado);
		});
	});
};

exports.insert = function(registro, callback){
	var strSQL = "INSERT INTO teContas (conta_id, NmConta, FgTipo) VALUES ('{0}','{1}','{2}')".format(registro.conta_id, registro.NmConta, registro.FgTipo);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.update = function(registro, callback){
	var strSQL = "UPDATE teContas SET conta_id = '{0}', NmConta = '{1}', FgTipo = '{2}' WHERE id = {3}".format(registro.conta_id, registro.NmConta, registro.FgTipo, registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.remove = function(registro, callback){
	var strSQL = "DELETE FROM teContas WHERE id = {0}".format(registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.graficoTrans = function(callback){
	var strSQL = 	"SELECT COUNT(f.id) as total, c.NmConta as conta " + 
			"FROM teContas c INNER JOIN fluxo f ON f.conta_id = c.id " +
			"GROUP BY c.NmConta ORDER BY c.NmConta desc";
	banco.consultaBanco(strSQL, function(err, info){
		callback(info);
	});
}

exports.graficoVolume = function(callback){
	var strSQL = 	"SELECT SUM(f.valor) as total, c.NmConta as conta " + 
			"FROM conta c INNER JOIN fluxo f ON f.conta_id = c.id " +
			"GROUP BY c.NmConta ORDER BY c.NmConta desc";
	banco.consultaBanco(strSQL, function(err, info){
		callback(info);
	});
}