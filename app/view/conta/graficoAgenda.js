Ext.define('RIA.view.agenda.graficoAgenda' ,{
    extend	: 'Ext.chart.Chart',
    alias 	: 'widget.graficoAgenda',   
    style	: 'background:#fff',
    animate	: true,
	theme	: 'Green',
	//'Base', 'Green', 'Sky', 'Red', 'Purple', 'Blue', 'Yellow' 
	//'Category1' ate 'Category6'. 
    shadow	: true,	
    store	: 'GraficoAgendas',
	//legend	: false,
	legend	: { position: 'right'},
    axes: [{
        type	: 'Numeric',
        position: 'bottom',
        fields	: ['total'],
        label	: {
            renderer: Ext.util.Format.numberRenderer('0,0')
        },
        title	: 'Qtde de Contatos',
        grid	: false,
        minimum	: 0
    }, {
        type		: 'Category',
        position	: 'left',
        fields		: ['categoria'],
        title		: 'Categorias'
    }],
    series: [{
        type		: 'Bar',
		// Bar, Column, Line, Radar, Scatter  
		//Area, Bar, Cartesian, Column, Gauge, Line, Pie, Radar, Scatter
        axis		: 'bottom',
        highlight	: true,
        tips		: {
            trackMouse: true,
            width	: 300,
            height	: 30,
            renderer: function(storeItem, item) {
                this.setTitle('Qtde de ' + storeItem.get('categoria') + ': ' + storeItem.get('total') + ' contatos' );
            }
        },
        label: {
            display: 'insideEnd',
            'text-anchor': 'middle',
            field: 'total',
            renderer: Ext.util.Format.numberRenderer('0'),
            orientation: 'horizontal',
            color: '#333'
        },
        xField: 'categoria',
        yField: 'total'
    }
    ],    
    initComponent: function(){
        this.callParent();
        this.store.load();
    }   
});