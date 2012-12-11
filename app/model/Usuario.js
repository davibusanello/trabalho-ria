Ext.define('CAX.model.Usuario', {
		extend		: 'Ext.data.Model',
		idProperty  : 'id',
		fields :[{
			name : 'id',
			type : 'int'
		},
		{
			name : 'NmUsuario',
			type : 'string'
		},
		{
			name : 'DsEmail',
			type : 'string'
		},
		{
			name : 'DsSenha',
			type : 'string'
		}
		]
});
