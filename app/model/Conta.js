Ext.define('CAX.model.Conta', {
    extend		: 'Ext.data.Model',
	idProperty  : 'id',
    fields: [
    {
        name: 'id'
    },
	{
        name: 'conta_id'
    },
    {
        name: 'NmConta',
        type: 'string'
    }
	,
    {
        name: 'FgTipo',
        type: 'int'
    }
    ]
});
