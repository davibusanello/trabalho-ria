// Repositorio de fluxos
var banco = require('../infra/banco.js');
	require("../infra/string.js");
	
exports.list = function(coluna, direcao, limite, inicio, pagina, callback){
	var strSQL = "SELECT id, conta_id, DsDescricao, DATE_FORMAT(DtFluxo, '%Y-%m-%d') as DtFluxo, NuValor FROM teFluxo" + 
		" ORDER BY " + coluna + " " + direcao +
		" LIMIT " + limite * (pagina - 1) + "," + limite;

	banco.consultaBanco(strSQL, function(err, info){
		var strQt = "SELECT COUNT(*) AS total FROM teFluxo";
		
		banco.consultaBanco(strQt, function(qt_err, qt_info){
			var resultado = { data : info, success : true, inicio : limite * (pagina - 1), total : qt_info[0].total };
			callback(resultado);
		});
	});
};

exports.insert = function(registro, callback){
	var strSQL = "INSERT INTO teFluxo (conta_id, DsDescricao, DtFluxo, NuValor) VALUES ('{0}','{1}','{2}','{3}')".format(registro.conta_id, registro.DsDescricao, registro.DtFluxo, registro.NuValor);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.update = function(registro, callback){
	var strSQL = "UPDATE teFluxo SET conta_id = '{0}', DsDescricao = '{1}', DtFluxo = '{2}', NuValor = '{3}' WHERE id = {4}".format(registro.conta_id, registro.DsDescricao, registro.DtFluxo, registro.NuValor, registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.remove = function(registro, callback){
	var strSQL = "DELETE FROM teFluxo WHERE id = {0}".format(registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}