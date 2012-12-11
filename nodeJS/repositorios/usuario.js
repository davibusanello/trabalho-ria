// Repositorio de teUsuarios
var banco = require('../infra/banco.js');
	require("../infra/string.js");

exports.login = function(email, senha, callback){
	console.log("Consulta dados no banco");
	var consulta = "SELECT COUNT(*) as ocorrencias FROM teUsuario WHERE " + 
							"DsEmail = '" + email + 	"' and DsSenha = '" + senha + "'";

	banco.consultaBanco(consulta, function(err, info){
		if(err == null){
			var ocorrencias = info[0].ocorrencias;
			if(ocorrencias == 0){
				consulta = "SELECT COUNT(*) as total FROM teUsuario";
				banco.consultaBanco(consulta, function(err, info){
					var total = info[0].total;
					console.log(total);
					if(total == 0) { 
						console.log("não existem registros de usuário");
						callback(true); 
					} else { 
						callback(false);
					}
				});
			} else {
				callback(true);
			}
		} else {
			callback(false);
		}
	});
};

exports.list = function(coluna, direcao, limite, inicio, pagina, callback){
	var strSQL = "SELECT id, NmUsuario, DsEmail, DsSenha FROM teUsuario" + 
		" ORDER BY " + coluna + " " + direcao +
		" LIMIT " + limite * (pagina - 1) + "," + limite;

	banco.consultaBanco(strSQL, function(err, info){
		console.log(err);

		var strQt = "SELECT COUNT(*) AS total FROM teUsuario";
		
		banco.consultaBanco(strQt, function(qt_err, qt_info){
			var resultado = { data : info, success : true, inicio : limite * (pagina - 1), total : qt_info[0].total };
			
			callback(resultado);
		});
	});
};

exports.insert = function(registro, callback){
	var strSQL = "INSERT INTO teUsuario (NmUsuario, DsEmail, DsSenha) VALUES ('{0}','{1}','{2}')".format(registro.NmUsuario, registro.DsEmail, registro.DsSenha);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.update = function(registro, callback){
	var strSQL = "UPDATE teUsuario SET NmUsuario = '{0}', DsEmail = '{1}', DsSenha = '{2}' WHERE id = {3}".format(registro.NmUsuario, registro.DsEmail, registro.DsSenha, registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}

exports.remove = function(registro, callback){
	var strSQL = "DELETE FROM teUsuario WHERE id = {0}".format(registro.id);
	banco.consultaBanco(strSQL, function(err, info){
		callback(err == null);
	});
}