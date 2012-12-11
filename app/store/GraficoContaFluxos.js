Ext.define('CAX.store.GraficoContaFluxos', {
    extend		: 'Ext.data.Store',
    autoLoad	: false,
    fields		: ['total', 'conta'],
    remoteSort	: false,
    proxy: {
        type: 'ajax',
        url: 'backend/conta/grafico/transacoes',
        reader: {
            type            : 'json',
            root            : 'data',
            successProperty : 'success'
        }
    }
});
