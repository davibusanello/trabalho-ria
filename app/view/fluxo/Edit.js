Ext.require(['CAX.view.conta.Combo']);

Ext.define('CAX.view.fluxo.Edit', {
    extend      : 'Ext.window.Window',
    alias       : 'widget.fluxoEdit',
    title       : 'Editar fluxo',
    layout      : 'fit',
    autoShow    : true,
    modal       : true,
    initComponent: function() {
        this.items = [{
            xtype           : 'form',
            style           : 'background-color: #fff;',
            fieldDefaults   : {
                anchor          : '100%',
                labelAlign      : 'left',
                labelWidth      : 150,
                allowBlank      : false,
                combineErrors   : false,
                msgTarget       : 'side'
            },
            defaultType         : 'textfield',
            defaults            : {
                            anchor: '100%'
            },
            items   : [
            {
                xtype       : 'contaCombo'
            },
            {
                xtype       : 'textarea',
                name        : 'DsDescricao',
                ref         : 'DsDescricao',
                fieldLabel  : 'Descrição',
                allowBlank  : false
            },
            {
                xtype       : 'datefield',
                name        : 'DtFluxo',
                ref         : 'DtFluxo',
                fieldLabel  : 'Data',
                maxValue    : new Date(),
                format      : 'd/m/Y',
                submitFormat: 'Y-m-d',
                allowBlank  : false
            },
            {
                xtype           : 'numberfield',
                allowDecimals   : true,
                minValue        : 0,
                name            : 'NuValor',
                ref             : 'NuValor',
                fieldLabel      : 'Valor',
                allowBlank      : false
            }
            ]

            }
        ];

        this.buttons = [{
            text    : 'Salvar',
            action  : 'save',
            iconCls : 'save'
        },
        {
            text    : 'Cancelar',
            scope   : this,
            iconCls : 'cancel',
            handler : this.close
        }];

        this.callParent(arguments);
    }
});
