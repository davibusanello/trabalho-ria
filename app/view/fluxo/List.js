Ext.define('CAX.view.fluxo.List' ,{
    extend  : 'Ext.grid.Panel',
    alias   : 'widget.fluxoList',
    store   : 'Fluxos',
    title   : 'Lista os fluxos',
    //selModel: {mode: 'MULTI'},
    selModel: Ext.create('Ext.selection.CheckboxModel'),
    columnLines: true,
    tbar :[
        {
            text    : 'Novo',
            action  : 'insert',
            iconCls : 'add',
            itemId  : 'insert'
        },
        {
            text    : 'Editar',
            action  : 'edit',
            iconCls : 'edit',
            itemId  : 'edit',
            disabled: true
        },
        {
            text    : 'Deletar',
            action  : 'destroy',
            iconCls : 'delete',
            itemId  : 'delete',
            disabled: true
        },
        {
            text    : 'Refresh',
            action  : 'refresh',
            iconCls : 'refresh',
            itemId  : 'refresh'
        }
    ],
    columns: [
        Ext.create('Ext.grid.RowNumberer'),
        {header: 'Código', dataIndex: 'id', flex: 1},
        {
            header: 'Conta',
            dataIndex: 'conta_id',
            flex: 1,
            renderer: function(value) {
                var contasStore = Ext.getStore('Contas');
                var record = contasStore.findRecord('id', value);
                if (record !== null)
                    return record.get('NmConta');
                return '';
            }
        },
        {header: 'Descrição', dataIndex: 'DsDescricao', flex: 1},
        {
            header: 'Data',
            dataIndex: 'DtFluxo',
            flex: 1,
            xtype: 'datecolumn',
            format: 'd/m/Y'
        },
        {
            header: 'Valor',
            dataIndex: 'NuValor',
            flex: 1,
            renderer: function (value) {
                return Ext.util.Format.currency(value);
            }
        }
    ],
    dockedItems: [{
        xtype       : 'pagingtoolbar',
        store       : 'Fluxos',
        dock        : 'bottom',
        displayInfo : true
    }],

    initComponent: function(){
        this.callParent();
        this.getSelectionModel().on('selectionchange', this.onSelectChange, this);
    },

    onRender: function(){
        this.store.load();
        this.callParent(arguments);
    },

    onSelectChange: function(selModel, selections){
        this.down('#delete').setDisabled(selections.length === 0);
        this.down('#edit').setDisabled(selections.length !== 1);
    }

});