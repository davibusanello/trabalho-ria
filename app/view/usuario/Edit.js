Ext.define('CAX.view.usuario.Edit', {
    extend      : 'Ext.window.Window',
    alias       : 'widget.usuarioEdit',
    title       : 'Editar usuários',
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
                xtype       : 'textfield',
                name        : 'NmUsuario',
                ref         : 'NmUsuario',
                fieldLabel  : 'Nome',
                allowBlank  : false
            },
            {
                xtype       : 'textfield',
                vtype       : 'email',
                name        : 'DsEmail',
                ref         : 'DsEmail',
                fieldLabel  : 'E-mail',
                allowBlank  : false
            }
            ,
            {
                xtype       : 'textfield',
                inputType   : 'password',
                name        : 'DsSenha',
                ref         : 'DsSenha',
                fieldLabel  : 'Senha',
                allowBlank  : false
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
