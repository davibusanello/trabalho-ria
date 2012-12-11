Ext.require(['CAX.view.AbstractList']);

Ext.define('CAX.view.conta.List' ,{
    extend      : 'CAX.view.AbstractList',
    alias       : 'widget.contaList',
    store       : 'Contas',
    title       : 'Lista das Contas',
    selModel    : Ext.create('Ext.selection.CheckboxModel'),
    initComponent: function(){

        this.columns = [
        Ext.create('Ext.grid.RowNumberer'),
        {header: 'Código',  dataIndex: 'id',  flex: 1}
        ,
        {
            header      : 'Conta Associada',
            dataIndex   : 'conta_id',
            flex        : 1,
            renderer    : function (value) {
                var record = this.getStore().findRecord('id', value);
                if (record !== null)
                    return record.get('NmConta');
                return '';
            }
        },
        {header: 'Nome',  dataIndex: 'NmConta',  flex: 1}
        ,
        {
            header: 'Tipo',
            dataIndex: 'FgTipo',
            flex: 1,
            renderer: function (value) {
        if (value == 0)
                    return 'Entrada';
                if (value == 1)
                    return 'Saída';
                return '';
            }
        }
        ];
        this.dockedItems = [{
            xtype: 'pagingtoolbar',
            store: 'Contas',
            dock: 'bottom',
            displayInfo: true
        }];
        this.callParent();
    }
});
