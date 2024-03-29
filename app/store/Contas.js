Ext.define('CAX.store.Contas', {
    extend: 'Ext.data.Store',
    model: 'CAX.model.Conta',
    remoteSort: false,
    autoLoad: true,
    pageSize: 10,
    proxy: {
        simpleSortMode: true,
        type: 'ajax',
            api            : {
                read    : 'backend/conta/list',
                create  : 'backend/conta/insert',
                update  : 'backend/conta/update',
                destroy : 'backend/conta/delete'
            },
        actionMethods : {
                read    : 'GET',
                create  : 'GET',
                update  : 'GET',
                destroy : 'GET'
        },
        reader: {
                type        : 'json',
                root        : 'data',
            successProperty : 'success'
        },
        writer: {
            type            : 'json',
            writeAllFields  : true,
            encode          : true,
            root            : 'data'
        },
        extraParams: {
            sort    : 'id',
            dir     : 'ASC'

        },
        listeners: {
            exception: function(proxy, response, operation){
                Ext.MessageBox.show({
                    title: 'REMOTE EXCEPTION',
                    msg: operation.getError(),
                    icon: Ext.MessageBox.ERROR,
                    buttons: Ext.Msg.OK
                });
            }
        }
    },
    listeners : {
      write: function(proxy, operation)
      {
        var obj = Ext.decode(operation.response.responseText);

        if(obj.success){
            Ext.ux.Msg.flash({
                msg: obj.message,
                type: 'success'
            });
        }else{
            Ext.ux.Msg.flash({
                msg: obj.message,
                type: 'error'
            });
        }
      }
    }
});
