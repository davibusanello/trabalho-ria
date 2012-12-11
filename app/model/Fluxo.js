Ext.define('CAX.model.Fluxo', {
    extend		: 'Ext.data.Model',
	idProperty  : 'id',
    fields: [
    {
       name : 'id'
    },
    {
        name: 'conta_id',
        type: 'int'
    },
    {
        name: 'DsDescricao',
        type: 'string'
    },
    {
        name: 'DtFluxo',
        type: 'date',
        dateFormat:'Y-m-d'
    },
    {
        name : 'NuValor',
		type : 'float'
    }
    ]
});
