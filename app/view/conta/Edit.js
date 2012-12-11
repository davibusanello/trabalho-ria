Ext.require(['CAX.view.AbstractForm']);
Ext.require(['CAX.view.AbstractWindow']);
Ext.require(['CAX.view.conta.Combo']);
Ext.require(['CAX.view.conta.ComboTipo']);

Ext.define('CAX.view.conta.Edit', {
    extend: 'CAX.view.AbstractWindow',
    alias : 'widget.contaEdit',
    title : 'Editar Conta',

    initComponent: function() {

        this.items = [{
            xtype: 'abstractform',
            items: [
          {
                  xtype         : 'contaCombo',
                  allowBlank    : true
              },
          {
                  name      : 'NmConta',
                  fieldLabel    : 'Nome',
              allowBlank    : false
              },
          {
                  name      : 'FgTipo',
                  fieldLabel    : 'Tipo',
                  xtype         : 'contaComboTipo',
                  allowBlank    : false
              }
          ]}
        ];
        this.callParent(arguments);
    }
});
